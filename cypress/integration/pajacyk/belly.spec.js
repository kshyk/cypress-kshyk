/// <reference types="cypress" />

context('Belly', () => {
    beforeEach(() => {
        cy.visit('https://www.pajacyk.pl/#index')
    })

    it('should contains Pajacyk in the page title', () => {
        cy.title().should('contain', 'Pajacyk')
    });

    it('should print thanks message after belly click', () => {
        cy.get('paj-click').click()
        cy.document().should('contain.text', 'dziękujemy :)')
    });
});