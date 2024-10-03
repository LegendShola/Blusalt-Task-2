import LandingPage from '../../support/pageObjects/LandingPage';
import dynamicTablePage from '../../support/pageObjects/DynamicTablePage';

// Step definition for visiting the landing page and clicking the "Dynamic Table" link
Given('I navigate to the "Dynamic Table" page from the landing page', () => {
  LandingPage.visitLandingPage();
  LandingPage.clickDynamicTableLink();
});

When('I get the CPU load value for Chrome from the table', () => {
  // Find the row index of Chrome and the column index of CPU first
  dynamicTablePage.getChromeRowIndex();  // Find Chrome's row position
  dynamicTablePage.getCPUColumnIndex();  // Find CPU's column position
  dynamicTablePage.getChromeCPULoad();   // Fetch the CPU load for Chrome
});

When('I retrieve the CPU load value from the yellow label', () => {
  dynamicTablePage.getYellowLabelCPULoad();
});

Then('I should see that the CPU load value matches the value in the yellow label', () => {
  // Compare the two values stored in Cypress aliases
  cy.get('@chromeCpuLoad').then((chromeCpuLoad) => {
    cy.get('@yellowLabelCpuLoad').then((yellowLabelCpuLoad) => {
      const cleanedYellowLabelCpuLoad = yellowLabelCpuLoad.replace('Chrome CPU: ', '').trim(); // Remove "Chrome CPU:" prefix
      expect(chromeCpuLoad.trim()).to.eq(cleanedYellowLabelCpuLoad);
    });
  });
});

