Feature: Sample App

Scenario: Verify login functionality
  Given I navigate to the "Sample App" page from the landing page
  When I enter valid login credentials
  Then I should be logged in successfully
