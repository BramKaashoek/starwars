import React, { useContext } from 'react';
import useGraphqlQuery from '../../../../../common/hooks/useGraphqlQuery';
import { charactersQuery } from '../../../queries/characterQueries';
import { characters } from '../../../../../common/interfaces/generated/characters';
import CharacterCard from './CharacterCard';
import styled from '@emotion/styled';
import { CharacterContext } from '../../../context/context';

interface IProps {}

const CardContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
});

const BigYellow = styled.div({
  marginTop: 24,
  width: '100%',
  fontSize: 42,
  color: 'yellow',
  font: 'Squada',
  fontWeight: 'bold',
  textAlign: 'center',
});

const CharacterCards: React.FC<IProps> = props => {
  const { movieId, planetId, speciesId } = useContext(CharacterContext);

  const { data, loading } = useGraphqlQuery<characters>(charactersQuery, {
    variables: { speciesId, planetId, movieId },
  });

  if (loading) return null;
  return (
    <CardContainer>
      {data && !data.characters.length && <BigYellow>No characters to show :(</BigYellow>}
      {data &&
        data.characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </CardContainer>
  );
};

export default CharacterCards;
