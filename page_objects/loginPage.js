export class loginPage{

  //Store locators

  weblocators={

     Username:'#email',
      Password:'#password',
      login:'button[type="submit"]'
  }
  openURL(){

      cy.visit(Cypress.env('URL'))
  }

  Username(email) {

     cy.get(this.weblocators.Username,{ timeout: 15000 }).type(email)

  }
  Password(pwd) {

      cy.get(this.weblocators.Password,{ timeout: 15000 }).type(pwd)
      
    }
    
    clickonLogin() {

      cy.get(this.weblocators.login,{ timeout: 15000 }).click()
      
    } 
}