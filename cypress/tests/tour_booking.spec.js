describe('Tour booking', () => {
    it('should allow guest to book a tour', () => {
      cy.visit('http://127.0.0.1:8000/');
      cy.get('button.book-tour').click();
      cy.get('.booking-confirmation').should('contain', 'Your booking was successful!');
    });
  });
  