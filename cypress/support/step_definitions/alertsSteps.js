import LandingPage from '../pageObjects/LandingPage';
import AlertsPage from '../pageObjects/AlertsPage';

// Step definition for visiting the landing page and navigating to the Alerts page
Given('I navigate to the "Alerts" page from the landing page', () => {
  LandingPage.visitLandingPage();
  LandingPage.clickAlertsLink();
});

// Step definition for triggering a browser alert
When('I trigger a browser alert', () => {
  AlertsPage.triggerAlert();
});

// Step definition for verifying the alert text without expected text parameter
Then('I should see the expected message', () => {
  AlertsPage.verifyAndAcceptAlert();
});
