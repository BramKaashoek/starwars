import { parseUrlsToIds } from './../../lib/helpers';
import { sa } from './../../lib/sa';
import { Species } from './speciesTypes';
import config from '../../config/config';

export const speciesResolver = {
  Query: {
    species: async (_, args, ctx): Promise<Species[]> => {
      const { planetId, movieId } = args;
      return speciesService.getSpeciess(planetId, movieId);
    },
  },
};

const speciesService = {
  getSpeciess: async (planetId: number, movieId: number) => {
    const species = await fetchSpeciess();

    return species
      .filter(species => planetId === undefined || species.homeworld === planetId)
      .filter(species => movieId === undefined || species.films.includes(movieId))
      .sort((a, b) => (a.id < b.id ? -1 : 1));
  },
};

const memoizedFetchSpeciess = (): (() => Promise<any[]>) => {
  let species = undefined;
  return async (): Promise<any[]> => {
    if (species) return species;
    const pages = [...Array(4)];

    const promises = pages.map(
      async (_, index) => await sa.get(`${config.swapi.base}/species/?page=${index + 1}`),
    );
    const res = await Promise.all(promises);

    species = res
      .map(r => r.results)
      .flat()
      .map(parseUrlsToIds);

    return species;
  };
};

const fetchSpeciess = memoizedFetchSpeciess();
