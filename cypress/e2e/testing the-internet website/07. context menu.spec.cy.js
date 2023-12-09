/// <reference types="cypress" />

describe("test for Context Menu webpage", () => {
  it("Right click in the box triggers an alert", () => {
    let url = "http://localhost:7080/context_menu";
    cy.visit(url);

    // setting up the alert
    cy.on("window:alert", (text) => {
      expect(text).equal("You selected a context menu");
    });

    // triggering the alert on right click
    cy.get("#hot-spot").should("be.visible").rightclick();
  });
});
