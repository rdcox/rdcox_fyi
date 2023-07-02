describe('When items in the nav bar are clicked', () => {
  it('navigates to my resume', () => {
    cy.visit('http://localhost:3000/');
    cy.contains("Resume")
      .click();
    cy.url().should('include', '/resume');
  })
})