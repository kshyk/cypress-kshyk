/// <reference types="cypress" />

context('Belly', () => {
    it('should donate after belly click', () => {
        cy.visit('https://www.pajacyk.pl/#index')
        cy.get('.paj-click').click()
        cy.document().should('contain.text', 'dziękujemy :)')
    });
});
