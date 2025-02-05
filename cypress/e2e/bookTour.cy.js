// import { bookTour } from "../../page_objects/bookTour"

import { bookTour } from "../../page_objects/bookTour"
//initialize
const bookTr=new bookTour()
// const loginObj=new createTour()

import bookTourData from 'C:/Users/Admin/OneDrive/Solutech/cypress/fixtures/bookTourData.json'

// import loginInvalidData from 'C:/Users/Admin/OneDrive/Solutech/cypress/fixtures/loginInvalidData.json'

describe ('fill the form',()=>{

    it('book Tour',()=>{
        bookTr.openURL()
        bookTr.clickbookT()
        bookTr.enterSlots(bookTourData.slots)
        bookTr.enterTicketHolder(bookTourData.ticketHolder)
        bookTr.enterEmail(bookTourData.email)
        // bookTr.totalAmount(bookTourData.totalamount)
        bookTr.clickonbookTour()

        cy.title().should,('eq', { timeout: 15000 },' Ticket Details ')

       

       });
        
})