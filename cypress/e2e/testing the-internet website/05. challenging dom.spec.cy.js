/// <reference types="cypress" />

describe("test for Challenging DOM webpage", () => {
  it("there are 3 buttons and all the names exists", () => {
    let url = "http://localhost:7080/challenging_dom";
    cy.visit(url);
    cy.get(".example .row .button").should("have.length", 3);
    cy.get(".example .row .button:nth-child(1)").should("be.visible");
  });

  it("get the 2nd row of the table", () => {
    let url = "http://localhost:7080/challenging_dom";
    cy.visit(url);

    cy.get("tbody > :nth-child(2)")
      .should("be.visible") // row is visible
      .children()
      .should("have.length", 7) // row has 7 children
      .and("contain", "Consequuntur1") // and the correct column exists.
      .and("be.visible");
  });

  it("click on edit of the 5th row", () => {
    let url = "http://localhost:7080/challenging_dom";
    cy.visit(url);

    cy.get("tbody > :nth-child(5) > :nth-child(7)")
      .should("be.visible") // row is visible
      .children()
      .should("contain", "edit")
      .contains("edit")
      .click();
  });

  it("click on delete of the 8th row", () => {
    let url = "http://localhost:7080/challenging_dom";
    cy.visit(url);

    cy.get("tbody > :nth-child(8) > :nth-child(7)")
      .should("be.visible")
      .children()
      .should("contain", "delete")
      .contains("delete")
      .click();
  });
});
