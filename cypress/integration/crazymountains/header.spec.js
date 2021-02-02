/// <reference types="cypress" />

context("Header Bar", () => {
    before(() => {
        cy.visit("https://crazymountains.com/")
    });

    it("should contain Facebook icon", () => {
        cy.get("a.facebook").should("be.visible")
    });
});
