const { faker } = require("@faker-js/faker/locale/pt_BR");
const {email, password} = require("../../fixtures/data.json");

describe('Checkout testing', () => {
    const dayjs = require('dayjs')

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion',`v2`, {domain:'lojaebac.ebaconline.art.br'})
        cy.visit('/')
        
    });

    afterEach(() => {
        //cancelar ordem
        cy.clickMenu("Order")
        cy.clickByID('Placed')
        cy.clickByID('cancel')
        cy.clickByID('confirm')

    });

    it('Should try to do a checkout sucessfully', () => {
        cy.login(email, password)
        cy.clickMenu('Browse')
        cy.chooseAnItemToBuy()
        cy.clickByID('addToCart')
        cy.clickByID('selectAddressOrContinueToPayment')
        cy.clickByID('completeCheckout')
        cy.get('[data-testid="goBackHome"]').should('contain','Go Back Home')
        cy.clickMenu("Order")
        cy.clickByID('Placed')
        cy.get('[data-testid="item-0"]').should('contain', dayjs().format('DD/MM/YYYY')) //checar se existe , ver se data esta a correta, 
    });
}); 