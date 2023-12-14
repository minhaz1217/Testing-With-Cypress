/// <reference types="cypress" />

describe("test for Drag and Drop webpage", () => {
  it("both div is present and visible", () => {
    let url = "http://localhost:7080/drag_and_drop";
    cy.visit(url);
    cy.get("#columns")
      .children()
      .first()
      .should("be.visible")
      .and("have.attr", "id", "column-a");
    cy.get("#columns")
      .children()
      .last()
      .should("be.visible")
      .and("have.attr", "id", "column-b");
  });

  xit("drag b to a", () => {
    let url = "http://localhost:7080/drag_and_drop";
    cy.visit(url);
    cy.get("#column-b")
      .trigger("mousedown", 10, 10, { which: 1 })
      .trigger("mousemove", -100, 10, { which: 1, force: true })
      .trigger("mouseup", -100, 20, { force: true });
    cy.get("#columns")
      .children()
      .first()
      .should("be.visible")
      .and("have.attr", "id", "column-a")
      .then((response) => {
        console.debug("a", response);
      });
    cy.get("#columns")
      .children()
      .last()
      .should("be.visible")
      .and("have.attr", "id", "column-b")
      .then((response) => {
        console.debug("b", response);
      });
  });
});
