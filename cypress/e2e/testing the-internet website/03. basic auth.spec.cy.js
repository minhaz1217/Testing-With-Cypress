/// <reference types="cypress" />

describe("Verify text elements in the page", () => {
  // here we learn basic authentication
  // when this page is loaded then in web browsers there is a prompt that asks for an user and a password
  // loading the url > clicking add button > verifying element added > clicking delete button > verifying element removed
  it("basic auth is successful and the webpage is loading properly with username pass in url", () => {
    let url = "http://admin:admin@localhost:7080/basic_auth";
    cy.visit(url);
    cy.get("h3").should("include.text", "Basic Auth");
    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper credentials."
    );
  });

  it("basic auth has failed and the webpage is loading properly and showing proper message", () => {
    let url = "http://localhost:7080/basic_auth";
    cy.visit(url, { failOnStatusCode: false });
    cy.get("body").should("include.text", "Not authorized");
  });

  it("basic auth is successful and the webpage is loading properly with auth headers", () => {
    let url = "http://localhost:7080/basic_auth";
    cy.visit(url, {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.get("h3").should("include.text", "Basic Auth");
    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper credentials."
    );
  });
});
