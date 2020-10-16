/// <reference types="cypress" />

context('Crazy Mountains', () => {
    beforeEach(() => {
        cy.visit('http://crazymountains.com/')
    })

    it('should be site under construction', () => {
        cy.request('GET', 'http://crazymountains.com/')
            .then((response) => {
                expect(response.status).to.eq(503)
            })
    });
});
