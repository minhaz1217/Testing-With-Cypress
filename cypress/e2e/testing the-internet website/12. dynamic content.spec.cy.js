/// <reference types="cypress" />

describe("test for Dynamic Content webpage", () => {
  it("page has 3 images and 3 rows", () => {
    let url = "http://localhost:7080/dynamic_content";
    cy.visit(url);

    // has 3 images
    cy.get("#content > .row").should("have.length", 3).and("be.visible");

    // has 3 text columns
    cy.get("#content > .row .large-10")
      .should("have.length", 3)
      .and("be.visible");
  });
});
