/// <reference types="cypress"/>

export const homepage = {

    openMenu (menuName){
        return cy.get(`[href="/Tab/${menuName}"]`).click()
    },

    openCart(){
        cy.get('.r-mh9cjk > .r-18u37iz > :nth-child(2) > .css-146c3p1').click()
    }
}