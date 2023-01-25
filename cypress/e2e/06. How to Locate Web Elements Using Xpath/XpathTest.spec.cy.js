/// <reference types="cypress" />

describe("Login to mercury tours and travel website", () => {
  it("logs into website using xpath", () => {
    cy.visit("http://the-internet.herokuapp.com/login");
    cy.xpath('//*[@id="username"]').type("tomsmith");
    cy.xpath('//*[@id="password"]').type("SuperSecretPassword!");
    cy.xpath("/html/body/div[2]/div/div/form/button").click();
  });
});
