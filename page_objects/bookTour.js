export class bookTour{

    //Store locators
  
    weblocators={
        bookaTour:'div[class="absolute inset-0 flex items-center justify-center"]',
         slt:'input[class="ivu-input ivu-input-large"]',
         ticketholdername:'input[type="text"]',
         email:'input[type="email"]',
        //  totalamount:'div[class="border-2 green rounded-md p-4 mt-4"]',
         confirmbooktour:'button[class="ivu-btn ivu-btn-primary"]',
     
    }
    openURL(){
  
        cy.visit('http://127.0.0.1:8000/');
    }
           
    clickbookT() {

        cy.get(this.weblocators.bookaTour,{ timeout: 15000 }).eq(0).click()
        
      } 
      enterSlots(sltsbooking) {
  
        cy.get(this.weblocators.slt,{ timeout: 15000 }).eq(0).type(sltsbooking)
              
      } 
      enterTicketHolder(ticketholderN) {
      
        cy.get(this.weblocators.ticketholdername,{ timeout: 15000 }).type(ticketholderN)
        
      } 
      enterEmail(emailAddress) {
      
        cy.get(this.weblocators.email,{ timeout: 15000 }).type(emailAddress)
        
      } 
      // totalAmount(Amount) {
      
      //   cy.get(this.weblocators.totalamount,{ timeout: 15000 }).type(Amount)
        
      // } 
      clickonbookTour() {
      
        cy.get(this.weblocators.confirmbooktour,{ timeout: 15000 }).eq(0).click()
        
      } 
  }