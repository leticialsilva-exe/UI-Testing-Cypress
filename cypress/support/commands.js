const { faker } = require("@faker-js/faker/locale/pt_BR");

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

// Victor.Moreira@yahoo.com

Cypress.Commands.add('login', (email , password) => { 
    cy.clickMenu('Account')
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    cy.clickByID('btnLogin')
 })

 Cypress.Commands.add('clickMenu', (menuName) => {
    cy.get(`[href="/Tab/${menuName}"]`).click()
 })

 Cypress.Commands.add('clickByID', (id) => {
    cy.get(`[data-testid="${id}"]`).click()
 })

 Cypress.Commands.add('chooseAnItemToBuy', () => {
    cy.get('div[class*="r-u8s1d r-zchlnj"][style="z-index: 0; display: flex;"] div[data-testid="productDetails"]')
    .eq(faker.number.int({ min: 0, max: 7 }))
    .click()
 })


 
