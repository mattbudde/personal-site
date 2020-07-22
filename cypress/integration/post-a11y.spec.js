/// <reference types="Cypress" />

describe("Accessibility tests", () => {
    beforeEach(() => {
      cy.visit("/a11y-cypress-testing")
        .get(".main")
        .injectAxe();
    });
    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y();
    });
  });
  