const { homepage } = require("../../support/pages/home.page")
const  loginPage  = require("../../support/pages/login.page")
const {password} = require("../../fixtures/data.json");
const { faker } = require("@faker-js/faker/locale/pt_BR");
const signUpPage = require("../../support/pages/signUp.page");
const profilePage = require("../../support/pages/profile.page");


describe('To test account creating', () => {

  const name = faker.person.firstName()
  const phone = faker.phone.number()
  const email= faker.internet.email(name)
  
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion',`v2`, {domain:'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });

  it('should set datas and create a new account', () => {
    homepage.openMenu('Account')
    loginPage.title().should('contain','Welcome to EBAC Shop')
    signUpPage.signUp(name, phone, email, password)
    homepage.openMenu('Account')
    profilePage.customerName().should('contain', name)
    profilePage.customerPhone().should('contain',phone)
    // profilePage.customerEmail().should('contain', email)
  })

  it('should try to use same email to creat account that already exists', () => {
    homepage.openMenu('Account')
    signUpPage.signUp(name, phone, email, password)
    signUpPage.warningText().should('contain','Email already exist')
  })

  
})