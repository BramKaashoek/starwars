import React from 'react';
import CharacterCards from './components/Cards/CharactersCards';
import Selects from './components/Selects/Selects';
import styled from '@emotion/styled';

interface IProps {}
const Chars = styled.div({
  width: '100%',
});

const Characters: React.FC<IProps> = props => {
  return (
    <Chars>
      <Selects />
      <CharacterCards />
    </Chars>
  );
};

export default Characters;
