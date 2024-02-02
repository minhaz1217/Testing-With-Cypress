/// <reference types="cypress" />

describe("test for Dynamic Controls webpage", () => {
  it("Clicking remove removes the checkbox and clicking add adds a checkbox", () => {
    let url = "http://localhost:7080/dynamic_controls";
    cy.visit(url);

    cy.get("#checkbox > input").should("not.be.checked");

    cy.get("#checkbox-example > button")
      .should("be.visible")
      .and("be.enabled")
      .and("have.text", "Remove")
      .click();

    cy.get("#checkbox-example > button")
      .should("be.visible")
      .and("be.disabled")
      .and("have.text", "Remove");

    cy.contains("Wait for it").should("be.visible");

    cy.contains("Add", { timeout: 10000 }).should("be.visible");

    cy.get("#checkbox > input").should("have.length", 0);

    cy.contains("Add").should("not.be.disabled").click();
    cy.contains("Add").should("be.disabled");

    cy.contains("Remove", { timeout: 10000 })
      .should("be.visible")
      .and("not.be.disabled");
    cy.get("#checkbox").should("have.length", 1).and("be.visible");

    cy.contains("It's back!").should("be.visible");
  });
});
