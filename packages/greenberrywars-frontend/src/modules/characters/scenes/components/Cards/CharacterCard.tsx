import React from 'react';
import styled from '@emotion/styled';
import { characters_characters } from '../../../../../common/interfaces/generated/characters';

interface IProps {
  character: characters_characters;
}

const Card = styled.div({
  margin: 48,
  padding: 8,
  width: 'fit-content',
  boxShadow: '0 3px 6px rgba(200,200,200,0.16), 0 3px 6px rgba(200,200,200,0.23)',
  backgroundColor: 'white',
});

const Portrait = styled.img({
  width: 250,
  height: 300,
  padding: 4,
});

const CharacterCard: React.FC<IProps> = (props: IProps) => {
  const { character } = props;

  return (
    <Card>
      {character.id === 20 ? (
        <Portrait src={require('../../../../../assets/yoda.jpeg')} />
      ) : (
        <Portrait src={require('../../../../../assets/jarjar.jpeg')} />
      )}
      <h3>{character.name}</h3>
      <h6>homeworld: {character.planet.name}</h6>
    </Card>
  );
};

export default CharacterCard;
