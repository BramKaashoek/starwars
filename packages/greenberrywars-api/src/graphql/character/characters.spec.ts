import { testGraphQl } from '../../lib/testHelpers';
import { expect } from 'chai';

describe('GraphQL: characters', () => {
  it('queries without inputs', async (): Promise<void> => {
    const query = `query {
        characters {
            name
            id
            planet {
              name
            }
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.characters.length).to.equal(87);
    expect(res.data.characters[0]).to.eql({
      name: 'Luke Skywalker',
      id: 1,
      planet: { name: 'Tatooine' },
    });
  });

  it('queries with planetID input', async (): Promise<void> => {
    const query = `query {
        characters(planetId: 2) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.characters.length).to.equal(3);
    expect(res.data.characters[0]).to.eql({ name: 'Leia Organa', id: 5 });
  });

  it('queries with speciesId input', async (): Promise<void> => {
    const query = `query {
        characters(speciesId: 2) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.characters.length).to.equal(5);
    expect(res.data.characters[0]).to.eql({ name: 'C-3PO', id: 2 });
  });

  it('queries with movieId input', async (): Promise<void> => {
    const query = `query {
        characters(movieId: 5) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.characters.length).to.equal(40);
    expect(res.data.characters[0]).to.eql({ name: 'C-3PO', id: 2 });
  });

  it('queries combined input', async (): Promise<void> => {
    const query = `query {
        characters(movieId: 1, speciesId: 4, planetId: 23) {
            name
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.characters.length).to.equal(1);
    expect(res.data.characters[0]).to.eql({ name: 'Greedo', id: 15 });
  });
});
