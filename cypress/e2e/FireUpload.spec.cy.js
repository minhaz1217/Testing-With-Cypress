describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    cy.get('[name=upfile]').attachFile('file/test.txt');
    cy.get("[value=Press]").click();
  })
})