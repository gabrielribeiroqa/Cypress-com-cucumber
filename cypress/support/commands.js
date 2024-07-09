// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Locators from "./locators/locators"

Cypress.Commands.add('login', (user, pass) => {

    cy.get(Locators.login.usuario).as('username')
    cy.get(Locators.login.senha).as('password')

    user
        ? cy.get('@username').clear().type(user)
        : cy.log('username is null')

    pass
        ? cy.get('[name=pass]').clear().type(pass)
        : cy.log('password is null')

})

