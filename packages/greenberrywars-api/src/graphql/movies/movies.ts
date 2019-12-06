import { parseUrlsToIds } from './../../lib/helpers';
import { sa } from './../../lib/sa';
import { Movie } from './movieTypes';
import config from '../../config/config';

export const moviesResolver = {
  Query: {
    movies: async (_, args, ctx): Promise<Movie[]> => {
      const { speciesId, planetId } = args;
      return movieService.getMovies(speciesId, planetId);
    },
  },
};

const movieService = {
  getMovies: async (speciesId: number, planetId: number) => {
    const movies = await fetchMovies();

    return movies
      .filter(movie => speciesId === undefined || movie.species.includes(speciesId))
      .filter(movie => planetId === undefined || movie.planets.includes(planetId))
      .sort((a, b) => (a.id < b.id ? -1 : 1));
  },
};

const memoizedFetchMovies = (): (() => Promise<any[]>) => {
  let movies = undefined;
  return async (): Promise<any[]> => {
    if (movies) return movies;

    const res = await sa.get(`${config.swapi.base}/films`);
    movies = res.results.map(parseUrlsToIds);
    return movies;
  };
};

const fetchMovies = memoizedFetchMovies();
