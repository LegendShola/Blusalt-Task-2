class AlertsPage {
  
    // Clicks the button that triggers a browser alert
    triggerAlert() {
      cy.get('#alertButton').click();
    }
  
    // Verifies the alert text and accepts it
    verifyAndAcceptAlert(expectedAlertText) {
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(expectedAlertText);
      });
    }
  }
  
  export default new AlertsPage();
  