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

  if (copyElement.url) {
    copyElement.id = getIdFromUrl(copyElement.url);
  } else {
    copyElement.id = 0;
  }

  return copyElement;
};
