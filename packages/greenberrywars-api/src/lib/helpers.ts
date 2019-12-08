import { fetchPlanets } from './../graphql/planets/planets';
import { fetchCharacters } from './../graphql/character/characters';
export const getIdFromUrl = (url: string): number => +url.match(/\d+/g);
export const getIdsFromUrls = (urls: string[]): number[] => urls.flatMap(getIdFromUrl);

export const parseUrlsToIds = element => {
  const copyElement = { ...element };

  if (copyElement.species) {
    copyElement.species = getIdsFromUrls(element.species);
  }

  if (copyElement.characters) {
    copyElement.characters = getIdsFromUrls(element.characters);
  }

  if (copyElement.films) {
    copyElement.films = getIdsFromUrls(element.films);
  }

  if (copyElement.planets) {
    copyElement.planets = getIdsFromUrls(element.planets);
  }

  if (copyElement.residents) {
    copyElement.residents = getIdsFromUrls(element.residents);
  }

  if (copyElement.homeworld) {
    copyElement.homeworld = getIdFromUrl(copyElement.homeworld);
  }

  if (copyElement.people) {
    copyElement.people = getIdsFromUrls(copyElement.people);
  }

  if (copyElement.url) {
    copyElement.id = getIdFromUrl(copyElement.url);
  } else {
    copyElement.id = 0;
  }

  return copyElement;
};

export const getSpeciesForPlanet = async planet => {
  const characters = await fetchCharacters();
  const combinedSpeciesIds = planet.residents.map(charId => {
    const char = characters.find(char => char.id === charId);
    return char.species;
  });

  const uniqueSpecieIds = [...new Set(combinedSpeciesIds.flat())];
  return uniqueSpecieIds;
};

export const getPlanetsForSpecies = async species => {
  const planets = await fetchPlanets();

  const combinedPlanetIds = species.people
    .map(charId => planets.filter(planet => planet.residents.includes(charId)))
    .flat()
    .map(planet => planet.id);

  const uniquePlanetIds = [...new Set(combinedPlanetIds)];

  return uniquePlanetIds;
};
