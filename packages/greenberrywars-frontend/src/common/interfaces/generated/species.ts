/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: species
// ====================================================

export interface species_species {
  __typename: "Species";
  name: string;
  id: number;
}

export interface species {
  species: species_species[];
}

export interface speciesVariables {
  movieId?: number | null;
  planetId?: number | null;
}
