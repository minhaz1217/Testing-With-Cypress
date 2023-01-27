/// <reference types="cypress" />

describe("Test Alerts", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });

  it("Test simple alert", () => {
    cy.on("window:alert", (text) => {
      expect(text).equal("I am a JS Alert");
    });

    cy.contains("Click for JS Alert").click();
  });

  it("Test confirm alert", () => {
    cy.on("window:confirm", () => {
      return false;
    });
    cy.contains("Click for JS Confirm").click();
  });

  it("Test Prompt alert", () => {
    cy.window().then(($win) => {
      cy.stub($win, "prompt").returns("By Minhaz");
    });
    cy.contains("Click for JS Prompt");
  });
});
