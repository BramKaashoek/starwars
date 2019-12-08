import React, { useContext } from 'react';
import Select from './Select';
import { speciesQuery } from '../../../queries/characterQueries';
import useGraphqlQuery from '../../../../../common/hooks/useGraphqlQuery';
import { species } from '../../../../../common/interfaces/generated/species';
import { CharacterContext } from '../../../context/context';

interface IProps {}

const SpeciesSelect: React.FC<IProps> = props => {
  const { movieId, speciesId, planetId, setSpeciesId } = useContext(CharacterContext);
  const { data, loading } = useGraphqlQuery<species>(speciesQuery, {
    variables: { movieId, planetId },
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value === '' ? setSpeciesId(undefined) : setSpeciesId(+e.target.value);
  };

  if (loading) return null;

  return (
    <Select data-test="speciesSelect" onChange={handleChange} value={speciesId}>
      {data &&
        data.species.map(species => (
          <option key={species.id} value={species.id}>
            {species.name}
          </option>
        ))}
    </Select>
  );
};

export default SpeciesSelect;
