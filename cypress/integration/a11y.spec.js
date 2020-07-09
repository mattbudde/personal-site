/// <reference types="Cypress" />

describe("Accessibility tests", () => {
    beforeEach(() => {
      cy.visit("/").get(".site-wrapper").injectAxe()
    })
    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y()
    })
  })