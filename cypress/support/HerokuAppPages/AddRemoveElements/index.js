import { ELEMENTS as el } from "./elements";

class AddRemoveElement {
  navigateToHerokuApp() {
    cy.visit("http://the-internet.herokuapp.com");
  }

  clickOnAddRemoveElementLink() {
    cy.contains(el.AddRemoveElementLink).click();
    cy.url().should("include", "/add_remove_elements/");
  }

  clickOnAddElementButton() {
    cy.visit("http://the-internet.herokuapp.com/add_remove_elements/");
    cy.get(el.AddElementButtonSelector).should("be.visible").click();
    cy.get(el.AddElementButtonSelector).should("be.visible");
  }

  clickOnDeleteButton() {
    cy.get(el.DeleteButtonSelector).should("be.visible").click();
    cy.get(el.DeleteButtonSelector).should("not.exist");
  }

  goBack() {
    cy.go("back");
  }
  testTheWholeThing() {
    cy.visit("http://the-internet.herokuapp.com/add_remove_elements/");
    cy.get(el.AddElementButtonSelector).should("be.visible").click();
    cy.get(el.AddElementButtonSelector).should("be.visible");
    cy.get(el.DeleteButtonSelector).should("be.visible").click();
    cy.get(el.DeleteButtonSelector).should("not.exist");
    cy.go("back");
  }
}

export default new AddRemoveElement();
