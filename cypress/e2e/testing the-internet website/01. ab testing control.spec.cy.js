/// <reference types="cypress" />

describe("Verify text elements in the page", () => {
  // here we learn about the selector and how to verify if a text exists or not
  // loading the url and seeing if the texts are found and is visible to the user
  const headerText = "A/B Test";
  const bodyText =
    "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn from different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).";
  it("load the website and verify text elements with no selector", () => {
    let url = "http://localhost:7080//abtest";
    cy.visit(url);
    cy.contains(headerText).should("be.visible");
    cy.contains(bodyText).should("be.visible");
  });

  it("load the website and verify text elements with basic selector", () => {
    let url = "http://localhost:7080//abtest";
    cy.visit(url);
    cy.get(".example>h3").contains(headerText).should("be.visible");
    cy.get(".example>p").contains(bodyText).should("be.visible");
  });

  it("load the website and verify text elements with css selector", () => {
    let url = "http://localhost:7080//abtest";
    cy.visit(url);
    cy.get(".example > h3:nth-child(1)")
      .contains(headerText)
      .should("be.visible");
    cy.get(".example > p:nth-child(2)").contains(bodyText).should("be.visible");
  });

  it("load the website and verify text elements with xpath selector", () => {
    let url = "http://localhost:7080//abtest";
    cy.visit(url);
    cy.xpath("/html/body/div[2]/div/div/h3")
      .contains(headerText)
      .should("be.visible");
    cy.xpath("/html/body/div[2]/div/div/p")
      .contains(bodyText)
      .should("be.visible");
  });
});
