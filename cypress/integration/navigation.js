it('Navigation should work by clicking on links', () => {
  cy.visit('/');
  cy.getByText(/Content of/).should('contain', 'home route');

  cy.getByText(/Link One/).click();
  cy.getByText(/Content of/).should('contain', 'route /one');

  cy.getByText(/Link Two/).click();
  cy.getByText(/Content of/).should('contain', 'route /two');

  cy.getByText(/Link Home/).click();
  cy.getByText(/Content of/).should('contain', 'home route');
})
