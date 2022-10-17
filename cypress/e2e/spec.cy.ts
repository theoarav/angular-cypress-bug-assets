describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Salut');
  });
});

const counterSelector = '[data-cy=counter]';

describe('Counter component on front page', () => {
  it('Counter is present', () => {
    cy.visit('/');
    cy.get(counterSelector);
  });

  it('Counter initialiased at 50', () => {
    cy.visit('/');
    cy.get(counterSelector).contains('50');
  });
});
