describe('Login functionality', () => {
    it('should show an error message for invalid credentials', () => {
      cy.visit('http://127.0.0.1:8000/');
      cy.get('input[name="username"]').type('invalidUser');
      cy.get('input[name="password"]').type('invalidPass');
      cy.get('button[type="submit"]').click();
      cy.get('.error-message').should('contain', 'Invalid credentials');
    });
  });
  