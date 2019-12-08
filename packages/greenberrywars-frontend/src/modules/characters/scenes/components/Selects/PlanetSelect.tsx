import React, { useContext } from 'react';
import Select from './Select';
import { planetsQuery } from '../../../queries/characterQueries';
import useGraphqlQuery from '../../../../../common/hooks/useGraphqlQuery';
import { planets } from '../../../../../common/interfaces/generated/planets';
import { CharacterContext } from '../../../context/context';

interface IProps {}

const PlanetSelect: React.FC<IProps> = props => {
  const { movieId, speciesId, planetId, setPlanetId } = useContext(CharacterContext);
  const { data, loading } = useGraphqlQuery<planets>(planetsQuery, {
    variables: { movieId, speciesId },
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value === '' ? setPlanetId(undefined) : setPlanetId(+e.target.value);
  };

  if (loading) return null;

  return (
    <Select onChange={handleChange} value={planetId}>
      {data &&
        data.planets.map(planet => (
          <option key={planet.id} value={planet.id}>
            {planet.name}
          </option>
        ))}
    </Select>
  );
};

export default PlanetSelect;
