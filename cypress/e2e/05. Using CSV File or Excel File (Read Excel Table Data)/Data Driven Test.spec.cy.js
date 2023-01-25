
var userData = require("../fixtures/file/userData.json");

describe("Data Driven Testing", ()=>{
    userData.forEach(data => {
        it(`should log in with all the available data ${data.username} & ${data.password}`, ()=>{
            cy.visit("http://the-internet.herokuapp.com/login");
            cy.get('#username').type(data.username);
            cy.get('#password').type(data.password);
            cy.get('#login > button').click();
        });
        return;
    });
});