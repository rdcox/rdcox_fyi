describe('When items in the nav bar are clicked', () => {
  it('navigates to my resume', () => {
    cy.visit('https://rdcox.fyi');
    cy.contains("Resume")
      .click();
    cy.url().should('include', '/resume');
  })
})