describe('Verify /apply is working', () => {
	const checkTheme = (theme) => {
		cy.get('html').should('have.attr', 'data-theme').and('equal', theme);
		cy.get('html').should('have.css', 'color-scheme').and('equal', theme);
	};
	it('check document data-theme and color-scheme style', () => {
		cy.visit('/apply');
		cy.get('div > button').contains('Sign In').click();
		cy.get('input[name=email]').type('testaccount@test.test');
		cy.get('button[type=submit]').contains('Sign In With Email').click();
		cy.get('button > span').contains('Sign in with Google').parent().click();
		cy.get('input[type=email]').type(process.env.TESTACCOUNT_EMAIL);
		cy.get('div > span').contains('Next').parent().click();

	});
});

export {};
