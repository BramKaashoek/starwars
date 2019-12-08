import { planetService } from './planets';
import { testGraphQl } from '../../lib/testHelpers';
import { expect } from 'chai';

describe('GraphQL: planets', () => {
  it('queries without inputs', async (): Promise<void> => {
    const query = `query {
        planets {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.planets.length).to.equal(61);
    expect(res.data.planets[0]).to.eql({ name: 'Tatooine', id: 1 });
  });

  it('queries with movieId input', async (): Promise<void> => {
    const query = `query {
        planets(movieId: 2) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.planets.length).to.equal(4);
    expect(res.data.planets[0]).to.eql({ name: 'Hoth', id: 4 });
  });

  it('queries with speciesId input', async (): Promise<void> => {
    const query = `query {
        planets(speciesId: 3) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.planets.length).to.equal(1);
    expect(res.data.planets[0]).to.eql({ name: 'Kashyyyk', id: 14 });
  });

  it('can query a planet by id', async (): Promise<void> => {
    const planet = await planetService.getPlanet(3);
    expect(planet).to.eql({
      climate: 'temperate, tropical',
      created: '2014-12-10T11:37:19.144000Z',
      diameter: '10200',
      edited: '2014-12-20T20:58:18.421000Z',
      films: [1],
      gravity: '1 standard',
      species: [],
      id: 3,
      name: 'Yavin IV',
      orbital_period: '4818',
      population: '1000',
      residents: [],
      rotation_period: '24',
      surface_water: '8',
      terrain: 'jungle, rainforests',
      url: 'https://swapi.co/api/planets/3/',
    });
  });
});
