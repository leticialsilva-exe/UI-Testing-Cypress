/// <reference types="cypress"/>

export const cartPage = {
    nameOfItem() {return cy.get('[data-testid="productName"]') },
    qtdItem() {return cy.get(':nth-child(2) > [style="color: rgb(0, 0, 0); font-size: 16px; margin-right: 10px; font-family: Montserrat-Regular; margin-bottom: 5px;"]')},
    totalPrice() {return cy.get('.r-1mmae3n > :nth-child(2) > [data-testid="price"]')},
    totalDiscount() {return cy.get('[data-testid="discount"]')},
    totalAmount() {return cy.get('[data-testid="total"]')}
}
