import LandingPage from '../pageObjects/LandingPage';
import ShadowDomPage from '../pageObjects/ShadowDomPage';

// Step definition for visiting the landing page and navigating to the Shadow DOM page
Given('I navigate to the "Shadow DOM" page from the landing page', () => {
  LandingPage.visitLandingPage();
  LandingPage.clickShadowDomLink();
});

// Step definition for interacting with shadow DOM elements
When('I click the button inside the shadow DOM', () => {
  ShadowDomPage.clickButtonInShadowDom();
});

// Step definition for verifying the GUID generation in shadow DOM
Then('I should see the generated GUID in the shadow DOM', () => {
  ShadowDomPage.verifyGuidGenerated();
});
