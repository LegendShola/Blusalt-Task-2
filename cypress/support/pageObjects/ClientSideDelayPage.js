class ClientSideDelayPage {

    // Navigates to the Client-Side Delay page by clicking the button
    clickClientSideDelayLink() {
        cy.contains('Client Side Delay').click();
    }   
  
    // Clicks the button to trigger the client-side delay
    clickButton() {
        cy.get('#ajaxButton').click();
    }
  
    // Verifies the delayed message appears after the delay
    verifyDelayedMessage() {
        cy.get('.bg-success', { timeout: 15000 }).should('be.visible').and('contain', 'Data calculated on the client side.');
    }
  }
  
  export default new ClientSideDelayPage();
  