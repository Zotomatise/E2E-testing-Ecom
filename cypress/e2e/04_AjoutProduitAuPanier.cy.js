/// <reference types="cypress" />

describe("Visite de la page et vérification des élements clés", () => {
  before(() => {
    cy.visit("https://www.demoblaze.com/");
    cy.contains("Cart").click();

    cy.get("body").then(($body) => {
      if ($body.find(".success").length > 0) {
        cy.get(".success").each((item) => {
          cy.wrap(item).find("button").contains("Delete").click(); 
        });
      }
    });
  });

  it("Devrait ajouter le produit sélectionné au panier", () => {
    cy.contains("Home").click();

    cy.contains("Nokia lumia 1520").click();
    cy.get(".name").should("contain", "Nokia lumia 1520");
    // ajouter l'assertion des autres elements de la page de produit
    cy.contains("Add to cart").click();
    cy.on("window:alert", (messageAlerte) => {
      expect(messageAlerte).to.equal("Product added");
    });
    cy.contains("Cart").click();
    // 1ère méthode
    // cy.get(".success").should("contain", "Nokia lumia 1520");

    //2 méthode
    cy.get(".success").within(() => {
      cy.contains("Nokia lumia 1520").should("be.visible");
    });
  });
});
