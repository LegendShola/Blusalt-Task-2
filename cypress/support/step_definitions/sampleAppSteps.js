import LandingPage from '../../support/pageObjects/LandingPage';
import SampleAppPage from '../../support/pageObjects/SampleAppPage';

// Step definition for visiting the landing page and navigating to the Sample App page
Given('I navigate to the "Sample App" page from the landing page', () => {
  LandingPage.visitLandingPage();
  LandingPage.clickSampleAppLink();
});

// Step definition for logging in to the Sample App
When('I enter valid login credentials', () => {
  SampleAppPage.login("Legend", "pwd");
});

// Step definition for verifying successful login
Then('I should be logged in successfully', () => {
  SampleAppPage.verifyLoginSuccess();
});
