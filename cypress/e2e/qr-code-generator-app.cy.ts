describe('qr-code-generator-app', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/qr-code-generator-app');
  });

  it('should display the qr-code container', () => {
    cy.get('.qrcode-container').should('exist');
  });

  it('action buttons are disabled if input is empty', () => {
    cy.get('.file-input-container button').should('be.disabled');
    cy.get('.action-buttons-container button').first().should('be.disabled');
    cy.get('.reset-button').should('be.disabled');
    cy.get('.download-button').should('be.disabled');
  });

  it('should generate and reset a qr-code', () => {
    cy.get('.qrcode-image').should('not.exist');
    cy.get('.input-url').type('https://thisisacypress.test');
    cy.get('.action-buttons-container button').first().click();
    cy.get('.qrcode-image').should('be.visible');
    cy.get('.reset-button').click();
    cy.get('.qrcode-image').should('not.exist');
  });
});
