/// <reference types="cypress" />

context("Home Page", () => {
    before(() => {
      cy.visit("https://crazymountains.eu/")
    });

    it("verifies social media icons in header", () => {
      ["Facebook", "Instagram", "E-mail", "Pinterest", "YouTube"].forEach((item) => {
        cy.get(`[data-label='${item}']`).should("be.visible");
      });
    });

    it("verifies footer icons and data", () => {
      cy.get(".payment-icon").should(($el) => {
        expect($el).to.have.length(3)
      });
      cy.get(".copyright-footer")
        .should("contain.text", "Copyright 2021 © crazymountains");
    });
});
