describe('qr-code-generator-app', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/qr-code-generator-app');
  });

  it('displays the qr-code container', () => {
    cy.get('.qrcode-container').should('exist');
  });
});
