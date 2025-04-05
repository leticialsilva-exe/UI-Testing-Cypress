/// <reference types="cypress"/>

export const homepage = {

    openMenu (menuName){
        return cy.get(`[href="/Tab/${menuName}"]`).click()
    }
}