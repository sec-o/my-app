describe('chatbot-app', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/chatbot-app');
  });

  it('should display the chat-container, check the buttons, write something and get a response', () => {
    cy.get('.chat-container').should('exist');
    cy.get('.input-container button').first().should('be.disabled');
    cy.get('.input-container button').eq(1).should('be.disabled');
    cy.get('.message-container').should('not.contain', 'Hello');
    cy.get('.input-container input').type('Hello');
    cy.get('.input-container button').first().should('not.be.disabled');
    cy.get('.input-container button').first().click();
    // Wait for the chatbot's mock response, which has a 3 second delay
    cy.wait(3000);
    cy.contains('.message-container', 'This is a mock response').should(
      'be.visible'
    );
    cy.get('.input-container button').first().should('be.disabled');
    cy.get('.input-container button').eq(1).should('not.be.disabled');
    cy.get('.message-container').should('contain', 'Hello');
    cy.get('.input-container button').eq(1).click();
    cy.get('.message-container').should('not.contain', 'Hello');
  });
});
