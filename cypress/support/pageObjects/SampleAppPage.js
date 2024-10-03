class SampleAppPage {
  
    // Performs login by entering username and password
    login(username, password) {
      cy.get('input[name="UserName"]').type(username);
      cy.get('input[name="Password"]').type(password);
      cy.get('#login').click();
    }
  
    // Verifies successful login by checking for a success message
    verifyLoginSuccess() {
      cy.get('#loginstatus').should('be.visible').and('contain', 'Welcome');
    }
  }
  
  export default new SampleAppPage();
  