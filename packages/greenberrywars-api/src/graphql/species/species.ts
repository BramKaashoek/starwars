import { parseUrlsToIds, getPlanetsForSpecies } from './../../lib/helpers';
import { sa } from './../../lib/sa';
import { Species } from './speciesTypes';
import config from '../../config/config';

export const speciesResolver = {
  Query: {
    species: async (_, args, ctx): Promise<Species[]> => {
      const { planetId, movieId } = args;
      return speciesService.getSpecies(planetId, movieId);
    },
  },
};

const speciesService = {
  getSpecies: async (planetId: number, movieId: number) => {
    const species = await fetchSpecies();

    return species
      .filter(species => planetId === undefined || species.planets.includes(planetId))
      .filter(species => movieId === undefined || species.films.includes(movieId))
      .sort((a, b) => (a.id < b.id ? -1 : 1));
  },
};

const memoizedFetchSpecies = (): (() => Promise<any[]>) => {
  let species = undefined;
  return async (): Promise<any[]> => {
    if (species) return species;
    const pages = [...Array(4)];

    const promises = pages.map(
      async (_, index) => await sa.get(`${config.swapi.base}/species/?page=${index + 1}`),
    );
    const res = await Promise.all(promises);

    const speciesPromises = res
      .map(r => r.results)
      .flat()
      .map(parseUrlsToIds)
      .map(async spec => {
        spec.planets = await getPlanetsForSpecies(spec);
        return spec;
      });

    species = await Promise.all(speciesPromises);

    return species;
  };
};

export const fetchSpecies = memoizedFetchSpecies();
