/* eslint-disable no-var */
describe('Navigation', () => {
  it('should navigate back to the home page', () => {
    // cy.visit(Cypress.env('host') + '404', {failOnStatusCode: false})
    cy.visit('/404', { failOnStatusCode: false });
    cy.request({ url: '/404', failOnStatusCode: false })
      .its('status')
      .should('equal', 404);
    cy.contains('Go Back to Homepage').click();

    // TODO: cypress is actually so dumb; check out https://github.com/citrushack/citrushack2023/issues/76
    // var baseUrl = Cypress.config('baseUrl');
    // cy.url().should('eq', baseUrl);
  });
});

export {};
