/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: planets
// ====================================================

export interface planets_planets {
  __typename: "Planet";
  name: string;
  id: number;
}

export interface planets {
  planets: planets_planets[];
}

export interface planetsVariables {
  speciesId?: number | null;
  movieId?: number | null;
}
