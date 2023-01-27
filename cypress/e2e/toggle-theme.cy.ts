describe('Toggle theme button', () => {
	const checkTheme = (theme) => {
		cy.get('html')
    	.should('have.attr', 'data-theme')
    	.and('equal', theme)
    cy.get('html')
    	.should('have.css', 'color-scheme')
    	.and('equal', theme)
	}
  it('check document data-theme and color-scheme style', () => {
    cy.visit('127.0.0.1:3000')

    checkTheme('light')
    cy.get('span.md\\:block > button:has(svg)').click()
    checkTheme('dark')
  })
})

export {};