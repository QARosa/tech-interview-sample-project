Cypress.Commands.add('create', (
    email = Cypress.env('USER_EMAIL'),
    password = Cypress.env('USER_PASSWORD')
  ) => {
    cy.visit('/')
    cy.get('#email').type(Cypress.env('USER_EMAIL'))
    cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false })
    cy.get('button[type="submit"]').click()
    cy.get('h1', {timeout: 10000})
    .should('contain', 'Your Notes')
    cy.contains('Create a new note').click()
    cy.get('#content').type('My note')
    cy.contains('Create').click()
    cy.get('h1', {timeout: 10000})
    .should('contain', 'Your Notes')
 })
