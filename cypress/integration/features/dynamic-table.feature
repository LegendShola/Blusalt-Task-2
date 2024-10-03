Feature: Dynamic Table CPU Load Verification

  Scenario: Verify Chrome CPU load against the yellow label
    Given I navigate to the "Dynamic Table" page from the landing page
    When I get the CPU load value for Chrome from the table
    And I retrieve the CPU load value from the yellow label
    Then I should see that the CPU load value matches the value in the yellow label
