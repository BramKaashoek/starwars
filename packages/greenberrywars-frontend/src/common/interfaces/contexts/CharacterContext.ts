export interface ICharacterContext {
  speciesId: number | undefined;
  setSpeciesId: (speciesId: number | undefined) => void;
  movieId: number | undefined;
  setMovieId: (movieID: number | undefined) => void;
  planetId: number | undefined;
  setPlanetId: (planetId: number | undefined) => void;
}
