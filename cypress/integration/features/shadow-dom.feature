Feature: Shadow DOM Interaction

Scenario: Verify interaction with shadow DOM elements
  Given I navigate to the "Shadow DOM" page from the landing page
  When I click the button inside the shadow DOM
  Then I should see the generated GUID in the shadow DOM
