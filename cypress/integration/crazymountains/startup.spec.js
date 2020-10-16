/// <reference types="cypress" />

context('Crazy Mountains', () => {
    it('should be site under construction', () => {
        cy.request('GET', 'http://crazymountains.com/')
            .then((response) => {
                expect(response.status).to.eq(503)
            })
    });
});
