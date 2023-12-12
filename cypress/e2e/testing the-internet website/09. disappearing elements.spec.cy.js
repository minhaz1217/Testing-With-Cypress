/// <reference types="cypress" />

describe("test for Disappearing Elements webpage", () => {
  it("check buttons and their hrefs", () => {
    let url = "http://localhost:7080/disappearing_elements";
    cy.visit(url);
    cy.contains("Home").should("be.visible").and("have.attr", "href", "/");
    cy.contains("About")
      .should("be.visible")
      .and("have.attr", "href", "/about/");
    cy.contains("Contact Us")
      .should("be.visible")
      .and("have.attr", "href", "/contact-us/");
    cy.contains("Portfolio")
      .should("be.visible")
      .and("have.attr", "href", "/portfolio/");
    if (
      Cypress.$(".example > ul:nth-child(4) > li:nth-child(5) > a:nth-child(1)")
        .length > 0
    ) {
      cy.get(".example > ul:nth-child(4) > li:nth-child(5) > a:nth-child(1)");
    }
  });
});
