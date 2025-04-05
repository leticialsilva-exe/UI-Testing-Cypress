/// <reference types="cypress"/>

class loginPage {
    get #email() {return cy.get('[data-testid="email"]')}
    get #password() {return cy.get('[data-testid="password"]')}
    get #btnLogin() {return cy.get('[data-testid="btnLogin"]')}

    title () {
        return cy.get('[data-testid="pageTitle"]')
    }
    
    login (email, password) {
        this.#email.type(email)
        this.#password.type(password)
        this.#btnLogin.click()
    } 
}

module.exports = new loginPage();