/// <reference types="cypress"/>

class profilePage {

    customerName () { return cy.get('[data-testid="CustomerName"]') }
    customerPhone() { return cy.get('[data-testid="CustomerPhone"]') }
    customerEmail() { return cy.get('[data-testid="CustomerEmail"]') }

}

module.exports = new profilePage();


