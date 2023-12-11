/// <reference types="cypress" />

describe("test for Checkboxes webpage", () => {
  it("there are 2 check boxes, one checked another not checked.", () => {
    let url = "http://localhost:7080/checkboxes";
    cy.visit(url);
    cy.get("#checkboxes input:nth-child(1)")
      .should("be.visible")
      .and("not.be.checked");
    cy.get("#checkboxes input:nth-child(3)")
      .should("be.visible")
      .should("be.checked");
  });

  it("first checkbox checked on click and is working properly.", () => {
    let url = "http://localhost:7080/checkboxes";
    cy.visit(url);
    cy.get("#checkboxes input:nth-child(1)")
      .should("be.visible")
      .and("not.be.checked")
      .check();
    cy.get("#checkboxes input:nth-child(1)")
      .should("be.visible")
      .and("be.checked");

    cy.get("#checkboxes input:nth-child(1)")
      .should("be.visible")
      .and("be.checked")
      .click();

    cy.get("#checkboxes input:nth-child(1)")
      .should("be.visible")
      .and("not.be.checked");
  });

  it("second checkbox unchecked on click and is working properly.", () => {
    let url = "http://localhost:7080/checkboxes";
    cy.visit(url);
    cy.get("#checkboxes input:nth-child(3)")
      .should("be.visible")
      .and("be.checked")
      .uncheck();

    cy.get("#checkboxes input:nth-child(3)")
      .should("be.visible")
      .and("not.be.checked");

    cy.get("#checkboxes input:nth-child(3)")
      .should("be.visible")
      .and("not.be.checked")
      .click();

    cy.get("#checkboxes input:nth-child(3)")
      .should("be.visible")
      .and("be.checked");
  });
});
