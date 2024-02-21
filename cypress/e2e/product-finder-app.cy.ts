describe('product-finder-app', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/product-finder-app');
  });

  it('should display the search-field', () => {
    cy.get('.search-field-container').should('exist');
  });

  it('should display the card-list-container', () => {
    cy.get('.card-list-container').should('exist');
    cy.get('.card-item').should('exist');
    cy.get('.card-header').should('exist');
    cy.get('.card-text').should('exist');
    cy.get('.price-container').should('exist');
  });

  it('the add to cart button should be disabled if the product is out of stock', () => {
    cy.get('.card-item').contains('Nokia').click();
    cy.url().should('include', '/Nokia_14');
    cy.get('.cart-control button').should('be.disabled');
  });

  it('should be redirected to the product detail page when clicking on an item, add it to the shopping cart and open it', () => {
    cy.get('.card-item').contains('Apple').click();
    cy.url().should('include', '/Apple_iPhone_18');
    cy.get('.product-details-item').should('exist');
    cy.get('.product-header').should('exist');
    cy.get('.product-full-description').should('exist');
    cy.get('.cart-control').should('exist');
    cy.get('.shopping-cart-container').should('not.exist');
    cy.get('.cart-control button').click();
    cy.get('.shopping-cart-container').should('be.be.visible');
    cy.get('.shopping-cart-container a').click();
    cy.get('.header').should('contain', 'Shopping-Cart');
    cy.get('tbody').should('contain', 'Apple');
    cy.get('tbody .icon').click();
    cy.get('.no-products').should('exist');
  });
});
