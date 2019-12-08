import gql from 'graphql-tag';

export const charactersQuery = gql`
  query characters($speciesId: Int, $movieId: Int, $planetId: Int) {
    characters(speciesId: $speciesId, movieId: $movieId, planetId: $planetId) {
      id
      name
      planet {
        name
      }
    }
  }
`;

export const moviesQuery = gql`
  query movies($speciesId: Int, $planetId: Int) {
    movies(speciesId: $speciesId, planetId: $planetId) {
      title
      id
    }
  }
`;

export const speciesQuery = gql`
  query species($movieId: Int, $planetId: Int) {
    species(movieId: $movieId, planetId: $planetId) {
      name
      id
    }
  }
`;

export const planetsQuery = gql`
  query planets($movieId: Int, $speciesId: Int) {
    planets(movieId: $movieId, speciesId: $speciesId) {
      name
      id
    }
  }
`;
