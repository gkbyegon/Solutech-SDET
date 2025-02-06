export class createTour{

  //Store locators

  weblocators={

     Username:'#email',
      Password:'#password',
      login:'button[type="submit"]',
      tours: ('a[href="http://127.0.0.1:8000/tours"]'),
      createT:'button[class="ivu-btn ivu-btn-primary ivu-btn-large"]',

      tourName:'input[class="ivu-input ivu-input-default"]',
      tourDescription:'input[autocomplete="off"]',
      destination:'div[class="ivu-select-selection"]',
      selctPlace:'li[class="ivu-select-item"]',
      slotPrice:'input[class="ivu-input ivu-input-default"]',
      slotsAvailable:'input[class="ivu-input ivu-input-default"]',
      submit:'button[class="ivu-btn ivu-btn-primary"]',
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
    clickontours() {

      cy.get(this.weblocators.tours,{ timeout: 20000 }).click()
      
    } 
    clickoncreatetours() {

      cy.get(this.weblocators.createT,{ timeout: 20000 }).click()
      
    } 
    tourName(trname) {

      cy.get(this.weblocators.tourName,{ timeout: 15000 }).eq(0).type(trname)
 
   }
   description(dcs) {
 
       cy.get(this.weblocators.tourDescription,{ timeout: 15000 }).eq(1).type(dcs)
       
     }
     
     enterDestination() {
 
       cy.get(this.weblocators.destination,{ timeout: 15000 }).click()
       
     } 
     pickfromDropdown() {
 
      cy.get(this.weblocators.selctPlace,{ timeout: 15000 }).click()
      
    } 
    enterPrice(prc) {
 
       cy.get(this.weblocators.slotPrice,{ timeout: 20000 }).eq(2).type(prc)
       
     } 
     enterSlots(str) {
 
       cy.get(this.weblocators.slotsAvailable,{ timeout: 20000 }).eq(3).type(str)
       
     } 
     Submit() {
 
      cy.get(this.weblocators.submit,{ timeout: 20000 }).eq(1).click({ force: true });
      
    } 
}