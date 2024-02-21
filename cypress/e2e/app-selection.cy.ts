describe('app-selection', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/home');
  });

  it('should contain the app-selection', () => {
    cy.get('app-selection').should('exist');
    cy.get('.header').should('be.visible');
    cy.get('.container mat-icon').should('be.visible');
    cy.get('.container p').should('be.visible');
  });
});
