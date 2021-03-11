/// <reference types="cypress" />
const baseUrl = "https://crazymountains.eu/";

context("Crazy Mountains", () => {
    it("should not be under construction", () => {
        cy.request({
          method: "GET",
          url: baseUrl,
          failOnStatusCode: false
        })
        .then((response) =>
          expect(response.status).to.eq(200)
        )
    });

    it("should navigate from *.com to *.eu domain", () => {
      cy.visit("https://crazymountains.com/")
      cy.url().should('eq', baseUrl)
    });
});
