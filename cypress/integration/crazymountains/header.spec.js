/// <reference types="cypress" />

context("Header Bar", () => {
    before(() => {
        cy.visit("https://crazymountains.eu/")
    });

    it("verifies social media icons", () => {
        cy.get("[data-label='Facebook']").should("be.visible")
        cy.get("[data-label='Instagram']").should("be.visible")
        cy.get("[data-label='E-mail']").should("be.visible")
        cy.get("[data-label='Pinterest']").should("be.visible")
        cy.get("[data-label='YouTube']").should("be.visible")
    });
});
