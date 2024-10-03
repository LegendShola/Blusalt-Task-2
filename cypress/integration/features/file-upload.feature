Feature: File Upload
@skip
Scenario: Verify file upload functionality
  Given I navigate to the "File Upload" page from the landing page
  When I upload a valid file
  Then I should see the file uploaded successfully
