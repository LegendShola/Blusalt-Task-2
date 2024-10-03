Feature: Alerts Handling

Scenario: Verify handling of browser alerts
  Given I navigate to the "Alerts" page from the landing page
  When I trigger a browser alert
  Then I should see the expected message
