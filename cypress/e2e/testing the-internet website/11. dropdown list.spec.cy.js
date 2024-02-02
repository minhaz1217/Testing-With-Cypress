/// <reference types="cypress" />

describe("test for Dropdown List webpage", () => {
  it("drop down is visible", () => {
    let url = "http://localhost:7080/dropdown";
    cy.visit(url);

    // drop down is visible and default value is null selected
    cy.get("#dropdown").should("be.visible");
    cy.get("#dropdown").should("have.value", null);
    cy.get("#dropdown option:selected").should(
      "have.text",
      "Please select an option"
    );

    // the first option in the dropdown is option 1 and can be selected
    cy.get("#dropdown").select(1).should("have.value", "1");
    cy.get("#dropdown option:selected").should("have.text", "Option 1");

    // the second option in the dropdown is option 2 and can be selected
    cy.get("#dropdown").select(2).should("have.value", "2");
    cy.get("#dropdown option:selected").should("have.text", "Option 2");
  });
});
