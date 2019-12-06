import { Character } from './characterTypes';
import { parseUrlsToIds } from './../../lib/helpers';
import { sa } from './../../lib/sa';
import config from '../../config/config';

export const charactersResolver = {
  Query: {
    // I like to split the resolver into a thin resolver calling a fat service
    // usually this is nice for handling complex args, but in this case they are rather simple. ah well.
    characters: async (_, args, ctx): Promise<Character[]> => {
      const { speciesId, planetId, movieId } = args;
      return characterService.getcharacters(speciesId, planetId, movieId);
    },
  },
};

const characterService = {
  getcharacters: async (
    speciesId: number,
    planetId: number,
    movieId: number,
  ): Promise<Character[]> => {
    const characters = await fetchCharacters();

    // apollo will do the parsing for me
    // the filtering could be done on the front end of course, since we already send all data there to start off with, but where's the fun in that
    return (
      characters
        // cant bang here because id 0 would always be included
        .filter(character => speciesId === undefined || character.species.includes(speciesId))
        .filter(character => planetId === undefined || character.homeworld === planetId)
        .filter(character => movieId === undefined || character.films.includes(movieId))
        .sort((a, b) => (a.id < b.id ? -1 : 1))
    );
  },
};

const memoizedFetchCharacters = (): (() => Promise<any[]>) => {
  // memoized function to not have to fetch the same data from the slow swapi the whole time
  // i could use a cache like redis, but its a bit overkill here
  let characters = undefined;

  return async (): Promise<any[]> => {
    if (characters) return characters;
    // would not do it this way in an actual production project, since consumed api might change
    const pages = [...Array(9)];

    const promises = pages.map(
      async (_, index) => await sa.get(`${config.swapi.base}/people/?page=${index + 1}`),
    );
    const res = await Promise.all(promises);

    characters = res
      .map(r => r.results)
      .flat()
      .map(parseUrlsToIds);

    return characters;
  };
};

const fetchCharacters = memoizedFetchCharacters();
