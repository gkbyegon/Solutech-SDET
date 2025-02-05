import { createTour } from "../../page_objects/createTour"

//initialize
const loginObj=new createTour()
// import loginData from '../../fixtures/loginData.json'

import loginData from 'C:/Users/Admin/OneDrive/Solutech/cypress/fixtures/loginData.json'

// import createToursData from 'C:/Users/Admin/OneDrive/Solutech/cypress/fixtures/createToursData.json'

describe ('test automation valid login',()=>{

    it('login flow',()=>{
        loginObj.openURL()
        loginObj.Username(loginData.Username)
        loginObj.Password(loginData.Password)
        loginObj.clickonLogin()
        loginObj.clickontours()
        cy.title().should,('eq', { timeout: 15000 },' Tours ')
        loginObj.clickoncreatetours()

        loginObj.tourName(loginData.trnames)
        loginObj.description(loginData.desc)
        loginObj.enterDestination(loginData.enterDsn)
        loginObj.pickfromDropdown(loginData.enterDsn)
        loginObj.enterPrice(loginData.enterPrc)
        loginObj.enterSlots(loginData.enterSlts)
        loginObj.Submit()
        

       });
        
})