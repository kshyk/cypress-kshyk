/// <reference types="cypress" />

context('Breadcrumb', () => {
    it('should donate after bread click', () => {
        cy.visit('http://www.okruszek.org.pl/')
        cy.get('.click-crumb').click()
        cy.document().should('contain.text', 'DZIĘKUJEMY!')
    });
});
