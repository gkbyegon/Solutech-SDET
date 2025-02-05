import { loginPage } from "../../page_objects/loginPage"

//initialize
const loginObj=new loginPage()
// import loginData from '../../fixtures/loginData.json'

import loginData from 'C:/Users/Admin/OneDrive/Solutech/cypress/fixtures/loginData.json'

describe ('test automation valid login',()=>{

    it('login flow',()=>{
        loginObj.openURL()
        loginObj.Username(loginData.Username)
        loginObj.Password(loginData.Password)
        loginObj.clickonLogin()

        // cy.title().should,('eq', { timeout: 15000 },'These credentials do not match our records.')

    // Validate that the error message exists and is visible
    // cy.get('.error-message', { timeout: 15000 }) // Increase timeout to 10 seconds
    //   .should('exist')               // Ensure the error message exists
    //   .should('be.visible')          // Check if the error message is visible
    //   .and('contain.text', 'These credentials do not match our records.'); // Validate the exact text
    });
        
})