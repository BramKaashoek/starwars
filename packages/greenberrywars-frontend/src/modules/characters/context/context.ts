import { ICharacterContext } from './../../../common/interfaces/contexts/CharacterContext';
import React from 'react';
export const CharacterContext = React.createContext<ICharacterContext>({
  speciesId: undefined,
  planetId: undefined,
  movieId: undefined,
  setSpeciesId: id => {},
  setPlanetId: id => {},
  setMovieId: id => {},
});
