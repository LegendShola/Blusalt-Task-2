class DynamicTablePage {
  
  // Fetch the table element and ensure it exists
  getTableElement() {
    return cy.get('[role="table"]').should('exist');
  }

  // Find the row index of Chrome
  getChromeRowIndex() {
    cy.get('div[role="rowgroup"]').last().within(() => {
      cy.get('div[role="row"]').each(($row, rowIndex) => {
        cy.wrap($row).find('span[role="cell"]').first().then(($cell) => {
          if ($cell.text().trim() === 'Chrome') {
            cy.log(`Chrome found at row index: ${rowIndex}`);
            cy.wrap(rowIndex).as('chromeRowIndex'); // Save Chrome row index
          }
        });
      });
    });
  }

  // Find the column index of CPU
  getCPUColumnIndex() {
    cy.get('div[role="rowgroup"]').first().within(() => {
      cy.get('span[role="columnheader"]').each(($header, columnIndex) => {
        if ($header.text().trim() === 'CPU') {
          cy.log(`CPU found at column index: ${columnIndex}`);
          cy.wrap(columnIndex).as('cpuColumnIndex'); // Save CPU column index
        }
      });
    });
  }

  // Get the CPU load value for Chrome based on row and column index
  getChromeCPULoad() {
    // Fetch the row index for Chrome and the column index for CPU
    cy.get('@chromeRowIndex').then((rowIndex) => {
      cy.get('@cpuColumnIndex').then((cpuColumnIndex) => {
        // Navigate to the specific row and column to get the CPU load value
        cy.get('div[role="rowgroup"]').last().within(() => {
          cy.get('div[role="row"]').eq(rowIndex).within(() => {
            cy.get('span[role="cell"]').eq(cpuColumnIndex).invoke('text').then((cpuLoad) => {
              cy.wrap(cpuLoad).as('chromeCpuLoad'); // Save the CPU value for Chrome
              cy.log(`Chrome CPU Load: ${cpuLoad}`);
            });
          });
        });
      });
    });
  }

  // Fetch the yellow label element and extract the CPU load
  getYellowLabelCPULoad() {
    cy.get('.bg-warning').should('exist').invoke('text').then((cpuLoad) => {
      cy.wrap(cpuLoad).as('yellowLabelCpuLoad');
      cy.log(`Yellow Label CPU Load: ${cpuLoad}`);
    });
  }
}

export default new DynamicTablePage();
