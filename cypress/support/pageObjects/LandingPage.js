class LandingPage {
    // Navigates to the main landing page
    visitLandingPage() {
      cy.visit('/');
    }
  
    // Navigates to the Client-Side Delay page by clicking the button
    clickClientSideDelayLink() {
      cy.contains('Client Side Delay').click();
    }
  
    // Navigates to the Dynamic Table page by clicking the link
    clickDynamicTableLink() {
      cy.contains('Dynamic Table').click();
    }
  
    // Navigates to the Sample App page by clicking the link
    clickSampleAppLink() {
      cy.contains('Sample App').click();
    }
  
    // Navigates to the Shadow DOM page by clicking the link
    clickShadowDomLink() {
      cy.contains('Shadow DOM').click();
    }
  
    // Navigates to the Alerts page by clicking the link
    clickAlertsLink() {
      cy.contains('Alerts').click();
    }
  
    // Navigates to the File Upload page by clicking the link
    clickFileUploadLink() {
      cy.contains('File Upload').click();
    }
  }
  
  export default new LandingPage();
  