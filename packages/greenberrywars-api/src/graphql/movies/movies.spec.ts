import { testGraphQl } from '../../lib/testHelpers';
import { expect } from 'chai';

describe('GraphQL: movies', () => {
  it('queries without inputs', async (): Promise<void> => {
    const query = `query {
        movies {
            title
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.movies.length).to.equal(7);
    expect(res.data.movies[0]).to.eql({ title: 'A New Hope', id: 1 });
  });

  it('queries with planetID input', async (): Promise<void> => {
    const query = `query {
        movies(planetId: 19) {
            title
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.movies.length).to.equal(1);
    expect(res.data.movies[0]).to.eql({ title: 'Revenge of the Sith', id: 6 });
  });

  it('queries with speciesId input', async (): Promise<void> => {
    const query = `query {
        movies(speciesId: 28) {
            title
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.movies.length).to.equal(2);
    expect(res.data.movies[0]).to.eql({ title: 'Attack of the Clones', id: 5 });
  });

  it('queries combined input', async (): Promise<void> => {
    const query = `query {
        movies( speciesId: 2, planetId: 3) {
            title
            id
        }
    }`;

    const res = await testGraphQl(query);
    expect(res.data.movies.length).to.equal(1);
    expect(res.data.movies[0]).to.eql({ title: 'A New Hope', id: 1 });
  });
});
