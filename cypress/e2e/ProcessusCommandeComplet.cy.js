/// <reference types="cypress" />

describe("Processus de commande complet", () => {
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

  it("Devrait permettre de passer une commande avec succès", () => {
    cy.contains("Cart").click();
    cy.contains("Place Order").click();
    cy.get("#name").type("Jean Philippe");
    cy.get("#country").type("France");
    cy.get("#city").type("Paris");
    cy.get("#card").type("123456789101235");
    cy.get("#month").type("Décembre");
    cy.get("#year").type("2024");
    cy.get(".btn-primary").contains("Purchase").click();
    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert").within(() => {
      cy.contains("Thank you for your purchase!").should("be.visible");
      cy.wait(500);
      cy.contains("OK").click();
    });
    cy.contains("Cart").click();
    cy.get("#tbodyid").should("not.contain", "Nokia lumia 1520");
  });
});
