import { parseUrlsToIds } from './../../lib/helpers';
import { sa } from './../../lib/sa';
import { Planet } from './planetTypes';
import config from '../../config/config';

export const planetsResolver = {
  Query: {
    planets: async (_, args, ctx): Promise<Planet[]> => {
      const { speciesId, movieId } = args;
      return planetService.getPlanets(speciesId, movieId);
    },
  },
};

const planetService = {
  getPlanets: async (speciesId: number, movieId: number) => {
    const planets = await fetchPlanets();

    return planets
      .filter(planet => speciesId === undefined || planet.residents.includes(speciesId))
      .filter(planet => movieId === undefined || planet.films.includes(movieId))
      .sort((a, b) => (a.id < b.id ? -1 : 1));
  },
};

const memoizedFetchPlanets = (): (() => Promise<any[]>) => {
  let planets = undefined;
  return async (): Promise<any[]> => {
    if (planets) return planets;

    const pages = [...Array(7)];

    const promises = pages.map(
      async (_, index) => await sa.get(`${config.swapi.base}/planets/?page=${index + 1}`),
    );
    const res = await Promise.all(promises);

    planets = res
      .map(r => r.results)
      .flat()
      .map(parseUrlsToIds);

    return planets;
  };
};

const fetchPlanets = memoizedFetchPlanets();
