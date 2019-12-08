describe('Characters', () => {
  before(() => {
    cy.visit('localhost:3000');
  });

  it('renders the appbar', () => {
    cy.get('[data-test=appbar]')
      .should('exist')
      .should('contain', 'GREENBERRY');
  });

  it('renders all character cards', () => {
    cy.get('[data-test=characterCard]')
      .should('exist')
      .should('have.length', 87)
      .first()
      .should('contain', 'Luke Skywalker')
      .should('contain', 'Tatooine');
  });

  it('should be able to filter based on movie', () => {
    cy.get('[data-test=movieSelect]').select('The Phantom Menace');
    cy.get('[data-test=characterCard]')
      .should('exist')
      .should('have.length', 34)
      .first()
      .should('contain', 'C-3PO')
      .should('contain', 'Tatooine');
  });

  it('should be able to filter based on planet', () => {
    cy.get('[data-test=planetSelect]').select('Tatooine');
    cy.get('[data-test=characterCard]')
      .should('exist')
      .should('have.length', 3)
      .first()
      .should('contain', 'C-3PO')
      .should('contain', 'Tatooine');
  });

  it('should be able to filter based on planet', () => {
    cy.get('[data-test=speciesSelect]').select('Human');
    cy.get('[data-test=characterCard]')
      .should('exist')
      .should('have.length', 2)
      .first()
      .should('contain', 'Anakin Skywalker')
      .should('contain', 'Tatooine');
  });
});
