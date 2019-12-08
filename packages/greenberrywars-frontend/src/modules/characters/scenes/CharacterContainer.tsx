import React, { useState } from 'react';
import Characters from './Characters';
import { CharacterContext } from '../context/context';

interface IProps {}

const CharacterContainer: React.FC<IProps> = props => {
  const [movieId, setMovieId] = useState<number | undefined>(undefined);
  const [planetId, setPlanetId] = useState<number | undefined>(undefined);
  const [speciesId, setSpeciesId] = useState<number | undefined>(undefined);

  return (
    <CharacterContext.Provider
      value={{ movieId, setMovieId, planetId, setPlanetId, speciesId, setSpeciesId }}
    >
      <Characters />;
    </CharacterContext.Provider>
  );
};

export default CharacterContainer;
