/// <reference types="cypress" />

describe("Verify text elements in the page", () => {
  // here we learn about selecting and clicking a button and verifying if an element exists after clicking that button
  // then deleting another button and making sure that the element disappears
  // loading the url > clicking add button > verifying element added > clicking delete button > verifying element removed
  it("clicking button adds a Delete button and clicking delete button removes delete button", () => {
    let url = "http://localhost:7080/add_remove_elements/";
    cy.visit(url);
    cy.contains("Delete").should("not.exist"); // at first the delete button doesn't exist
    cy.contains("Add Element").should("be.visible").click(); // clicking the add button
    cy.contains("Delete").should("be.visible").click(); // after clicking the add button the delete button comes and is clicked
    cy.contains("Delete").should("not.exist"); // after clicking the delete button, the delete button is gone
  });

  it("clicking add button multiple time adds multiple delete buttons", () => {
    let url = "http://localhost:7080/add_remove_elements/";
    cy.visit(url);
    cy.contains("Delete").should("not.exist"); // at first the delete button doesn't exist
    cy.contains("Add Element").should("be.visible").click();
    cy.contains("Add Element").should("be.visible").click();
    cy.contains("Add Element").should("be.visible").click();
    cy.get(".added-manually").should("have.length", 3).and("be.visible");
    cy.contains("Delete").should("be.visible").click();
    cy.get(".added-manually").should("have.length", 2).and("be.visible");
  });
});
