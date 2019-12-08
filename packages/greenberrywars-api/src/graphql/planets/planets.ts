import { parseUrlsToIds, getSpeciesForPlanet } from './../../lib/helpers';
import { sa } from './../../lib/sa';
import { Planet } from './planetTypes';
import config from '../../config/config';

export const planetsResolver = {
  Query: {
    planets: async (_, args, ctx): Promise<Planet[]> => {
      const { movieId, speciesId } = args;
      return planetService.getPlanets(movieId, speciesId);
    },
  },
};

export const planetService = {
  getPlanets: async (movieId: number, speciesId: number) => {
    const planets = await fetchPlanets();

    return planets
      .filter(planet => movieId === undefined || planet.films.includes(movieId))
      .filter(planet => speciesId === undefined || planet.species.includes(speciesId))
      .sort((a, b) => (a.id < b.id ? -1 : 1));
  },
  getPlanet: async (planetId: number) => {
    const planets = await fetchPlanets();
    return planets.find(planet => planet.id === planetId);
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

    const planetPromises = res
      .map(r => r.results)
      .flat()
      .map(parseUrlsToIds)
      // enriching planets with species through characters
      .map(async planet => {
        planet.species = await getSpeciesForPlanet(planet);
        return planet;
      });

    planets = await Promise.all(planetPromises);

    return planets;
  };
};

export const fetchPlanets = memoizedFetchPlanets();
