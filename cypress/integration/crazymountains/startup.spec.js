/// <reference types="cypress" />

context("Crazy Mountains", () => {
    it("should not be under construction", () => {
        cy.request({
          method: "GET",
          url: "https://crazymountains.eu/",
          failOnStatusCode: false
        })
        .then((response) =>
          expect(response.status).to.eq(200)
        )
    });

    it("should navigate from *.com to *.eu domain", () => {
      cy.visit("https://crazymountains.com/")
      cy.url().should('eq', 'https://crazymountains.eu/')
    });
});
