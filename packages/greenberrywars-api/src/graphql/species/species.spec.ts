import { testGraphQl } from '../../lib/testHelpers';
import { expect } from 'chai';

describe('GraphQL: species', () => {
  it('queries without inputs', async (): Promise<void> => {
    const query = `query {
        species {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.species.length).to.equal(37);
    expect(res.data.species[0]).to.eql({ name: 'Human', id: 1 });
  });

  it('queries with planetID input', async (): Promise<void> => {
    const query = `query {
        species(planetId: 23) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.species.length).to.equal(1);
    expect(res.data.species[0]).to.eql({ name: 'Rodian', id: 4 });
  });

  it('queries with movieId input', async (): Promise<void> => {
    const query = `query {
        species(movieId: 5) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.species.length).to.equal(14);
    expect(res.data.species[0]).to.eql({ name: 'Human', id: 1 });
  });

  it('queries combined input', async (): Promise<void> => {
    const query = `query {
        species(movieId: 1, planetId: 23) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.species.length).to.equal(1);
    expect(res.data.species[0]).to.eql({ name: 'Rodian', id: 4 });
  });
});
