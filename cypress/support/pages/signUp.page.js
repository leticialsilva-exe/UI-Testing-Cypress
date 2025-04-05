/// <reference types="cypress"/>
const { faker } = require("@faker-js/faker/locale/pt_BR")

class signUpPage {

    warningText() { return cy.get('[data-testid="warning"]') }

    write(txtName, txt){
        return cy.get(`[data-testid="${txtName}"]`).type(txt)
    }
    
    signUp(name, phone, email, password){
        cy.get('[data-testid="signUp"]').click()
        this.write('firstName',name)
        this.write('lastName', faker.person.lastName())
        this.write('phone', phone)
        cy.get('[placeholder="Email Address"]').type(email)
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(password)
        this.write('repassword', password)
        cy.get('[data-testid="create"]').click()
    }
}
module.exports = new signUpPage();
