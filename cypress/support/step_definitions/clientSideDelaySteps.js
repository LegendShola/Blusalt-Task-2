import LandingPage from '../../support/pageObjects/LandingPage';
import ClientSideDelayPage from '../../support/pageObjects/ClientSideDelayPage';

// Step definition for visiting the landing page and clicking the "Client Side Delay" link
Given('I navigate to the "Client Side Delay" page from the landing page', () => {
  LandingPage.visitLandingPage();
  LandingPage.clickClientSideDelayLink();
});

// Step definition for clicking the delay button
When('I click the "Button" to start client-side delay', () => {
  ClientSideDelayPage.clickButton();
});

// Step definition for verifying the delayed message
Then('I should see the delayed message after the delay', () => {
  ClientSideDelayPage.verifyDelayedMessage();
});
