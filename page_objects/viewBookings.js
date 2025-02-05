export class viewBooking{

  //Store locators

  weblocators={

     Username:'#email',
      Password:'#password',
      login:'button[type="submit"]',
      // booking: 'xpath('//div[@id="main-content"]')',
      booking: ('a[href="http://127.0.0.1:8000/bookings"]')
      // booking: 'button[class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"]'
     
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
    clickonBooking() {

      cy.get(this.weblocators.booking,{ timeout: 20000 }).click()
      
    } 
}