/// <reference types="cypress" />

import add_remove from "../../support/HerokuAppPages/AddRemoveElements";

describe("Add remove elements test", () => {
  before(() => {
    add_remove.navigateToHerokuApp();
  });

  it.only("Test Adding element and then removing it", () => {
    add_remove.testTheWholeThing();
  });
  it("check add and remove elements link", () => {
    add_remove.clickOnAddRemoveElementLink();
  });

  it("click on add element to add element", () => {
    add_remove.clickOnAddElementButton();
  });

  it("check on delete button to make it disappear", () => {
    add_remove.clickOnDeleteButton();
  });

  it("after test go back to home page", () => {
    add_remove.goBack();
  });
});
