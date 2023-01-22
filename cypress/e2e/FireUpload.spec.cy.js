describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    cy.get('[name=upfile]').selectFile('cypress/fixtures/file/file_for_upload_test.txt');
    cy.get("[value=Press]").click();
  })
})