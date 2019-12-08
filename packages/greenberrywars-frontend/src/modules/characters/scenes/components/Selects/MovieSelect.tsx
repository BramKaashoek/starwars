import React, { useContext } from 'react';
import Select from './Select';
import { moviesQuery } from '../../../queries/characterQueries';
import useGraphqlQuery from '../../../../../common/hooks/useGraphqlQuery';
import { movies } from '../../../../../common/interfaces/generated/movies';
import { CharacterContext } from '../../../context/context';

interface IProps {}

const MovieSelect: React.FC<IProps> = props => {
  const { planetId, speciesId, movieId, setMovieId } = useContext(CharacterContext);
  const { data, loading } = useGraphqlQuery<movies>(moviesQuery, {
    variables: { planetId, speciesId },
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value === '' ? setMovieId(undefined) : setMovieId(+e.target.value);
  };

  if (loading) return null;

  return (
    <Select onChange={handleChange} value={movieId}>
      {data &&
        data.movies.map(movie => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
    </Select>
  );
};

export default MovieSelect;
