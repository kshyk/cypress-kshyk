/// <reference types="cypress" />

context("Cookies Bar", () => {
    beforeEach(() => {
        cy.visit("https://teamandpersonal.pl/")
    })

    it("should be present on page load", () => {
        cy.get("div#catapult-cookie-bar")
          .should("be.visible")
          .should("contain.text", "Serwis wykorzystuje pliki cookies. Korzystając ze strony wyrażasz zgodę na wykorzystywanie plików cookies. dowiedz się więcej.")
    });

    it("should hide when OK button is clicked", () => {
        cy.get("button[id=catapultCookie]").click()
        cy.get("div#catapult-cookie-bar").should("not.be.visible")
    });
});
