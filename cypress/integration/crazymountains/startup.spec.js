/// <reference types="cypress" />

context("Crazy Mountains", () => {
    it("should not be under construction", () => {
        cy.request({
          method: "GET",
          url: "http://crazymountains.com/",
          failOnStatusCode: false
        })
        .then((response) =>
          expect(response.status).to.eq(200)
        )
    });
});
