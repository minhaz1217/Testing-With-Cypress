/// <reference types="cypress" />

describe("IFrame Test", () => {
  before(() => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
  });

  it("actions within IFrame", () => {
    cy.get("#mce_0_ifr").then(($iframe) => {
      var iframeBody = $iframe.contents().find("body");

      cy.wrap(iframeBody).click().clear().type("Cypress Testing");
    });
  });
});
