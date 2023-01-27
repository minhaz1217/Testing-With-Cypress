/// <reference types="cypress" />

describe("API Test Automation", () => {
  before(() => {
    cy.visit("https://reqres.in/");
  });

  it("Get Test", () => {
    cy.request("GET", "/api/users?page=2").then(() => {
      (response) => {
        expect(response.status).equal(200);
        expect(response.body.data[1].id).equal(8);
        expect(response.body).to.have.property("total_pages");
      };
    });

    it("Post Test", ()=>{
        cy.request("POST", "/api/users", {
            "name" : "Minhaz",
            "job" : "consultant"
        }).then( (response)=>{
            expect(response.status).equal(201);;
            expect(response.body).to.have.property("name", "Minhaz");
        } );
    })

  });
});
