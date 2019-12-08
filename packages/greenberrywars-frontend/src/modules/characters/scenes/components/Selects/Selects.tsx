import React from 'react';
import styled from '@emotion/styled';
import MovieSelect from './MovieSelect';
import PlanetSelect from './PlanetSelect';
import SpeciesSelect from './SpeciesSelect';

interface IProps {}

const StyledSelects = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
  '@media (max-width: 760px)': {
    flexDirection: 'column',
  },
});

const Selects: React.FC<IProps> = props => {
  return (
    <StyledSelects>
      <MovieSelect />
      <PlanetSelect />
      <SpeciesSelect />
    </StyledSelects>
  );
};

export default Selects;
