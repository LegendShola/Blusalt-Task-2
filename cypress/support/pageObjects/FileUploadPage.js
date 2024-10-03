class FileUploadPage {
  
  // Simulate file upload via Browse button
  uploadFileUsingBrowseButton(fileName) {
    const filePath = `files/${fileName}`;

    // Access the iframe and find the file input (Browse button)
    cy.frameLoaded("iframe[src='/static/upload.html']"); // Make sure the iframe selector is correct
    cy.iframe().find('#file-upload').attachFile(filePath); // Update the selector for your input
  }

  // Simulate file upload via Drag & Drop
  uploadFileViaDragDrop(fileName) {
    const filePath = `files/${fileName}`;

    // Access the iframe and find the area that accepts drag-and-drop file uploads
    cy.frameLoaded("iframe[src='/static/upload.html']"); // Ensure this selector matches your iframe
    cy.iframe().find('#drag-drop-area').attachFile(filePath, { action: 'drag-drop' }); // Correct selector for drag-drop area
  }

  // Verifies that the file has been successfully uploaded
  verifyFileUploadSuccess() {
    cy.iframe().find('#uploadedFilePath').should('contain', 'Upload successful'); // Update this selector if necessary
  }
}

export default new FileUploadPage();
