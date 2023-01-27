/// <reference types="cypress" />

describe("API Test Automation", () => {
  //   before(() => {
  //     // cy.visit("https://reqres.in/");
  //   });

  it("Get Test", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then(() => {
      (response) => {
        expect(response.status).equal(200);
        expect(response.body.data[1].id).equal(8);
        expect(response.body).to.have.property("total_pages");
      };
    });
  });
  it("Post Test", () => {
    cy.request("POST", "https://reqres.in/api/users", {
      name: "Minhaz",
      job: "consultant",
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body).to.have.property("name", "Minhaz");
    });
  });

  it("Put Test", () => {
    cy.request("PUT", "https://reqres.in/api/users/2", {
      name: "Khan",
      job: "engineer",
    }).then((response) => {
      expect(response.status).equal(200);
    });
  });

  it("Delete Test", () => {
    cy.request("DELETE", "https://reqres.in/api/users/2").then((response) => {
      expect(response.status).equal(204);
    });
  });
});
