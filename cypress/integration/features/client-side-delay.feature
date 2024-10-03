Feature: Client-Side Delay

Scenario: Verify client-side delay message appears after waiting
  Given I navigate to the "Client Side Delay" page from the landing page
  When I click the "Button" to start client-side delay
  Then I should see the delayed message after the delay
