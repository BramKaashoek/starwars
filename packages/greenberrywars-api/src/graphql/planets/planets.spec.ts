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

  it('queries with speciesId input', async (): Promise<void> => {
    const query = `query {
        planets(speciesId: 19) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.planets.length).to.equal(1);
    expect(res.data.planets[0]).to.eql({ name: 'Bestine IV', id: 26 });
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

  it('queries combined input', async (): Promise<void> => {
    const query = `query {
        planets(movieId: 1, speciesId: 4) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.planets.length).to.equal(1);
    expect(res.data.planets[0]).to.eql({ name: 'Tatooine', id: 1 });
  });
});
