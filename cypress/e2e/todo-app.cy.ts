describe('todo-app', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/todo-app');
  });

  it('displays the todo-list', () => {
    cy.get('.todo-list').should('contain', 'Learn Angular');
    cy.get('.todo-list').find('span.status-circle').should('have.length', 3);
  });

  it('displays todo-items', () => {
    cy.get('.todo-item').first().should('have.text', 'Learn Angular');
    cy.get('.todo-item').last().should('have.text', 'Deploy the app');
  });

  it('can enter a new task', () => {
    cy.get('.add-task input').type('test');
    cy.get('.add-task button').click();
    cy.get('.todo-item').last().should('have.text', 'test');
  });

  it('can set a task completed + delete it', () => {
    cy.get('.todo-list').find('span.status-circle').should('have.length', 3);
    cy.get('.completed-tasks-title').should('not.exist');
    cy.get('.todo-list').find('span.status-circle').last().click();
    cy.get('.completed-tasks-title').should('be.visible');
    cy.get('.todo-list').should('contain', 'Deploy the app');
    cy.get('span.status-circle.circle-completed').should('exist');
    cy.get('.completed-tasks-title mat-icon').click();
    cy.get('span.status-circle.circle-completed').should('not.exist');
    cy.get('.completed-tasks-title mat-icon').click();
    cy.get('span.status-circle.circle-completed').should('exist');
    cy.get('.delete-button').click();
    cy.get('span.status-circle.circle-completed').should('not.exist');
    cy.get('.completed-tasks-title').should('not.exist');
    cy.get('.todo-list').find('span.status-circle').should('have.length', 2);
  });
});
