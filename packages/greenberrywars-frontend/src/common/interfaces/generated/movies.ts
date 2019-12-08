/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: movies
// ====================================================

export interface movies_movies {
  __typename: "Movie";
  title: string;
  id: number;
}

export interface movies {
  movies: movies_movies[];
}

export interface moviesVariables {
  speciesId?: number | null;
  planetId?: number | null;
}
