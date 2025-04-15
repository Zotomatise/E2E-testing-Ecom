/// <reference types="cypress" />

describe("Visite de la page et vérification des élements clés", () => {
  before(() => {
    cy.visit("https://www.demoblaze.com/");
    cy.contains("Nokia lumia 1520").click();
    cy.get(".name").should("contain", "Nokia lumia 1520");
    // ajouter l'assertion des autres elements de la page de produit
    cy.contains("Add to cart").click();
    cy.on("window:alert", (messageAlerte) => {
      expect(messageAlerte).to.equal("Product added");
    });
  });

  it("Devrait ajouter le produit sélectionné au panier", () => {
    cy.contains("Cart").click();
    cy.contains("Nokia lumia 1520").should("be.visible");
    cy.contains("Delete").click();
    cy.get("#tbodyid").should("not.contain", "Nokia lumia 1520");
  });
});
