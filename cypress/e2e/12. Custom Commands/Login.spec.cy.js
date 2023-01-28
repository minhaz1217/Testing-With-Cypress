/// <reference types="cypress" />

describe("Testing cypress custom commands", () => {
  it("Logging in with command", () => {
    cy.Login();
  });
});
