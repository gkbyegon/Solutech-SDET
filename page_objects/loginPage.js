class LoginPage {
    visit() {
      cy.visit('http://127.0.0.1:8000/');
    }
  
    enterCredentials(username, password) {
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    getErrorMessage() {
      return cy.get('.error-message').invoke('text');
    }
  }
  
  module.exports = new LoginPage();
  