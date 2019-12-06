import { expect } from 'chai';
import { getIdFromUrl, getIdsFromUrls } from './helpers';

describe('Helpers: ', () => {
  it('gets numerical IDs from urls', async (): Promise<void> => {
    expect(getIdFromUrl('https://swapi.co/api/planets/11/')).to.equal(11);
  });

  it('gets numerical IDs from arrays of urls', async (): Promise<void> => {
    expect(
      getIdsFromUrls(['https://swapi.co/api/planets/11/', 'https://swapi.co/api/planets/12/']),
    ).to.eql([11, 12]);
  });
});
