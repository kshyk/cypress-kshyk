/// <reference types="cypress" />

context('Crazy Mountains', () => {
    beforeEach(() => {
        cy.visit('http://crazymountains.com/')
    })

    it('should be site under construction', () => {
        cy.get('h1').should('have.text', 'Tryb konserwacji')
        cy.get('h2 > p').should('have.text','Przepraszamy za niedogodności.
Nasza strona jest obecnie poddawana pracom konserwacyjnym.
Dziękujemy za zrozumienie.')
    });
});
