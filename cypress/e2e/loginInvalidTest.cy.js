import { loginInvalidPage } from "../../page_objects/loginInvalidPage"

//initialize
const loginObj1=new loginInvalidPage()
// import loginData from '../../fixtures/loginData.json'

import loginInvalidData from 'C:/Users/Admin/OneDrive/Solutech/cypress/fixtures/loginInvalidData.json'

describe ('test automation invalid login',()=>{

    it('login flow',()=>{
        loginObj1.openURL()
        loginObj1.Username(loginInvalidData.Username)
        loginObj1.Password(loginInvalidData.Password)
        loginObj1.clickonLogin()

        cy.title().should,('eq', { timeout: 15000 },'These credentials do not match our records.')

       });
        
})