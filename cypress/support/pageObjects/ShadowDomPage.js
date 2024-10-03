class ShadowDomPage {
  
    // Interacts with a button inside a shadow DOM
    clickButtonInShadowDom() {
      cy.get('guid-generator')
        .shadow()
        .find('#buttonGenerate')
        .click();
    }
  
    // Verifies the GUID generated inside the shadow DOM
    verifyGuidGenerated() {
      cy.get('guid-generator')
        .shadow()
        .find('#editField')
        .should('not.have.value', '');
    }
  }
  
  export default new ShadowDomPage();
  