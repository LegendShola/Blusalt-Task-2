
# Cypress POM - Cucumber BDD Project

## Overview

This project is an end-to-end test automation framework built using **Cypress** and **Cucumber BDD**, following the **Page Object Model (POM)** design pattern. It allows easy-to-read and maintainable test cases by separating logic into reusable page objects and utilizing Cucumber for writing feature files in Gherkin syntax.

## Prerequisites

Before you can run the tests, ensure that you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** (Node Package Manager, comes with Node.js)
- **Cypress** (version 13.x or higher)
- **Cucumber** (via the `cypress-cucumber-preprocessor` plugin)

To verify your setup, run the following commands:

```bash
node -v
npm -v
```

## Project Structure

The project follows a typical Cypress structure with added support for Cucumber BDD and Page Object Model (POM):

```plaintext
├── cypress
│   ├── fixtures        # Test data used by the tests
│   ├── integration
│   │   └── features    # Cucumber feature files written in Gherkin syntax
│   ├── plugins         # Cypress plugins configuration (includes Cucumber preprocessor)
│   ├── support
│   │   ├── commands.js # Custom commands for Cypress
│   │   ├── index.js    # Global configurations and imports
│   │   └── pageObjects # Page Object Model classes for UI interaction
├── .github             # CI/CD GitHub Actions for automation
├── node_modules        # Project dependencies (auto-generated after npm install)
├── .gitignore          # Files and directories to ignore in git
├── cypress.json        # Cypress configuration file
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation (this file)
└── cucumber-report.json # Output report of test runs
```

### Key Components

- **Page Object Model (POM):** This pattern abstracts the interaction logic with the web pages into separate classes (`pageObjects`), making the tests modular and reusable.
  
- **Cucumber BDD:** Tests are written in Gherkin syntax (`*.feature` files) located under `cypress/integration/features`. Each feature file contains scenarios that map to step definitions.

- **Custom Commands:** Extend Cypress with custom commands located in `cypress/support/commands.js`.

## Installation

Follow these steps to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/cypress-pom-cucumber-bdd.git
   cd cypress-pom-cucumber-bdd
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Cypress:

   ```bash
   npx cypress install
   ```

## Running the Tests

There are two ways to run the tests: **headless mode** and **interactive mode**.

### Running in Headless Mode

Headless mode runs the tests in the background and outputs the result in the terminal.

```bash
npx cypress run
```

You can also run specific tests by specifying a feature file:

```bash
npx cypress run --spec "cypress/integration/features/sample.feature"
```

### Running in Interactive Mode

Interactive mode allows you to run tests using Cypress’s Test Runner GUI:

```bash
npx cypress open
```

Once the Cypress Test Runner opens, select the browser you want to use and click on a test to execute it.

### Running Specific Cucumber Scenarios

You can filter and run specific scenarios using tags in your feature files. First, tag the scenario with `@tagName` in the feature file, then run it like this:

```bash
npx cypress run --env TAGS="@tagName"
```

## Writing Tests

### Feature Files

Feature files are located in the `cypress/integration/features` directory. These files are written in Gherkin syntax and describe the behavior of your application.

Example:

```gherkin
Feature: File Upload

  Scenario: User uploads a valid file via drag-and-drop
    Given I navigate to the "File Upload" page
    When I upload a valid file "exampleFile.pdf"
    Then I should see the file uploaded successfully
```

### Step Definitions

The step definitions are located in the `cypress/integration/step_definitions` directory. These files contain the actual test code that gets executed for each step in the feature files.

Example:

```javascript
import FileUploadPage from '../../support/pageObjects/FileUploadPage';

Given('I navigate to the "File Upload" page', () => {
  // Logic to navigate to the file upload page
});

When('I upload a valid file {string}', (fileName) => {
  FileUploadPage.uploadFileUsingBrowseButton(fileName);
});

Then('I should see the file uploaded successfully', () => {
  FileUploadPage.verifyFileUploadSuccess();
});
```

### Page Object Model

The `pageObjects` directory contains classes representing different pages or components of the web application. Each class contains methods for interacting with the page elements.

Example (`FileUploadPage.js`):

```javascript
class FileUploadPage {

  // Upload a file using the 'Browse files' button
  uploadFileUsingBrowseButton(fileName) {
    const filePath = `files/${fileName}`;
    cy.get('#browse-button').attachFile(filePath);
  }

  // Verify successful file upload
  verifyFileUploadSuccess() {
    cy.get('#uploadedFilePath').should('contain', 'Upload successful');
  }
}

export default new FileUploadPage();
```

## Continuous Integration (CI)

This project includes a CI/CD pipeline using **GitHub Actions**. The configuration file (`.github/workflows/cypress-ci.yml`) automatically runs Cypress tests on every push or pull request to the repository.

The GitHub Actions workflow:

- Checks out the code.
- Installs dependencies.
- Runs Cypress tests in headless mode.

## Troubleshooting

If you encounter issues with the Cypress test runner or commands not working as expected, try the following:

1. Ensure all dependencies are installed:

   ```bash
   npm install
   ```

2. Make sure Cypress is properly installed:

   ```bash
   npx cypress install
   ```

3. Check the `cypress.json` configuration file for correct base URL and other settings.

## Reporting

Cypress generates screenshots and videos for test failures. These are automatically uploaded as artifacts during the CI/CD process if tests fail. You can find them in the `cypress/screenshots` and `cypress/videos` directories, or from the GitHub Actions page.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

