import LandingPage from '../../support/pageObjects/LandingPage';
import FileUploadPage from '../../support/pageObjects/FileUploadPage';

// Step definition for visiting the landing page and navigating to the File Upload page
Given.skip('I navigate to the "File Upload" page from the landing page', () => {
  LandingPage.visitLandingPage();
  LandingPage.clickFileUploadLink();
});

// Step definition for uploading a file
When.skip('I upload a valid file', () => {
    FileUploadPage.uploadFileViaDragDrop('exampleFile.pdf');
    FileUploadPage.verifyFileUploadSuccess();
});

// Step definition for verifying the file upload success
Then.skip('I should see the file uploaded successfully', () => {
    FileUploadPage.uploadFileViaDragDrop('exampleFile.pdf');
    FileUploadPage.verifyFileUploadSuccess();
});
