/// <reference types="cypress" />

describe("test for broken image in a webpage", () => {
  it("web page has 3 images", () => {
    let url = "http://localhost:7080/broken_images";
    cy.visit(url);
    cy.get(".example>img").should("have.length", 3).and("be.visible");
  });

  it("page has 2 broken images and 1 correct image", () => {
    let url = "http://localhost:7080/broken_images";
    cy.visit(url);

    let brokenImage = 0,
      correctImage = 0;

    cy.get(".example>img")
      .each((image) => {
        console.debug("Image", image[0]);
        cy.wrap(image).scrollIntoView().should("be.visible");
        const mainImage = image[0];
        if (mainImage.naturalHeight === 0 && mainImage.naturalWidth === 0) {
          brokenImage++;
        } else {
          correctImage++;
        }
      })
      .then(() => {
        expect(correctImage).to.eq(1);
        expect(brokenImage).to.eq(2);
      });
  });

  //   // if all images are loaded correctly, this test should fully pass,
  //   // this is the condition to test if all images in the page is loading properly
  //   it("page has no broken image", () => {
  //     let url = "http://localhost:7080/broken_images";
  //     cy.visit(url);

  //     cy.get(".example>img").each((image) => {
  //       console.debug("Image", image[0]);
  //       cy.wrap(image).scrollIntoView().should("be.visible");
  //       expect(image[0].naturalWidth).to.be.greaterThan(0);
  //       expect(image[0].naturalHeight).to.be.greaterThan(0);
  //     });
  //   });
});
