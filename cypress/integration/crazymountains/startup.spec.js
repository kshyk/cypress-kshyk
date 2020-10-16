/// <reference types="cypress" />

context('Crazy Mountains', () => {
    beforeEach(() => {
        cy.visit('http://crazymountains.com/')
    })

    it('should be site under construction', () => {
        cy.get('h1').should('have.text', 'Tryb konserwacji')
        cy.get('h2 > p')
          .should('contain.text', 'Przepraszamy za niedogodności.')
          .should('contain.text', 'Nasza strona jest obecnie poddawana pracom konserwacyjnym.')
          .should('contain.text', 'Dziękujemy za zrozumienie.')
    });
});
