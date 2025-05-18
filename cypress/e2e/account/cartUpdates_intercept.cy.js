const { homepage } = require("../../support/pages/home.page");
const { oneItem }  = require("../../fixtures/getCart_OnlyItem.json");
const { twoItens } = require("../../fixtures/getCart_TwoItens");
const { cartPage } = require("../../support/pages/myCart.page");

describe('Given the user are in the cart page', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', `v2`, { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit("/")
    });

    it('When one item is add', () => {
        // setting variable to save cartId of the current session
        // and intercepting the getCart request
        let cartId = 0
        cy.intercept('GET',
            '**/getCart**',
            {
                body: {
                    "success": true,
                    "cart": {
                        "_id": `${cartId}`,
                        "products": oneItem
                    }
                }
            }
        ).as("getCart")

        //using wait to get the cartId and use it to manipulate the responses
        cy.wait('@getCart').then((interception) => {
            cartId = interception.request.query.userId;
        });

        //opening the cart and checking its displayed artifacts
        homepage.openCart()
        cartPage.nameOfItem().should('has.text', 'Camiseta Azul')
        cartPage.qtdItem().should('has.text', 'Price (1 item)')
        cartPage.totalPrice().should('has.text', 'R$ 30.99')
        cartPage.totalDiscount().should('has.text', '- R$ 6')
        cartPage.totalAmount().should('has.text', 'R$ 24.99')
    });

    it('When more than one item is add', () => {
        // setting variable to save cartId of the current session
        // and intercepting the getCart request
        let cartId = 0
        cy.intercept('GET',
            '**/getCart**',
            {
                body: { 
                    "success": true,
                    "cart": {
                        "_id": `${cartId}`,
                        "products": twoItens
                    }
                }
            }
        ).as("getCart")

        //opening the cart and checking its displayed artifacts
        homepage.openCart()

        //using wait to get the cartId and use it to manipulate the responses
        cy.wait('@getCart').then((interception) => {
            cartId = interception.request.query.userId;
        });

        cartPage.nameOfItem().should('has.text', 'Camiseta VermelhaCamiseta Azul')
        cartPage.qtdItem().should('has.text', 'Price (2 items)')
        cartPage.totalPrice().should('has.text', 'R$ 719.97')
        cartPage.totalDiscount().should('has.text', '- R$ 70')
        cartPage.totalAmount().should('has.text', 'R$ 649.97')
    });

    it.skip('When it has no item in the cart', () => {
        
    });

});