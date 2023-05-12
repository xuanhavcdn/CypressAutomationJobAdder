import LoginPage from "../pages/loginPage";

const logindata = require("../../fixtures/login")
const randomeChar = Cypress._.random(0, 1e10).toString(36)

describe("Login test", ()=> {
    beforeEach("Open the website", () => {
        cy.visit("/")
        cy.wait(3000)
    })

    it("TC1: Verify that the user can create an account successfully", () => {
        cy.get(LoginPage.signUpOption).click()
        cy.get(LoginPage.userName).clear().type(logindata.userName + randomeChar)
        cy.get(LoginPage.email).clear().type(randomeChar + logindata.email)
        cy.get(LoginPage.passWord).clear().type(logindata.passWord)
        cy.get(LoginPage.signInBtn).click()
        //Verify homepage is displayed correctly with correct username
        cy.get(LoginPage.homePage + logindata.userName + randomeChar + "\"]").should("be.visible")
        cy.xpath(LoginPage.yourFeedXpath).should("be.visible")
    })
    it("TC2: Verify that a user cannot log in when entering a wrong email address or password", () => {
        cy.get(LoginPage.signInOption).click()
        cy.get(LoginPage.email).clear().type(randomeChar + "1" + logindata.email)
        cy.get(LoginPage.passWord).clear().type(logindata.passWord + "1")
        cy.get(LoginPage.signInBtn).click()
        cy.get(LoginPage.errorMessage).should("be.visible")
    })
})