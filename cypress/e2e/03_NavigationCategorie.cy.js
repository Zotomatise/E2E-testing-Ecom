/// <reference types="cypress" />
import "@percy/cypress";

describe.skip("Navigation entre les catégorie de produits", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  it("Devrait afficher les produits de la catégorie téléphones", () => {
    cy.contains("Phones").click();
    cy.wait(500);
    cy.get("#tbodyid .card").each((produit) => {
      cy.wrap(produit).find(".card-img-top").should("be.visible");
      cy.wrap(produit).find(".card-title").should("be.visible");
      cy.wrap(produit).find("h5").should("be.visible");
      cy.wrap(produit).find(".card-text").should("be.visible");
    });
  });
  it("Devrait afficher les produits de la catégorie ordinateurs", () => {
    cy.contains("Laptops").click();
    cy.get("#tbodyid .card").each((produit) => {
      cy.wrap(produit).find(".card-img-top").should("be.visible");
      cy.wrap(produit).find(".card-title").should("be.visible");
      cy.wrap(produit).find("h5").should("be.visible");
      cy.wrap(produit).find(".card-text").should("be.visible");
    });
  });
  it("Devrait afficher les produits de la catégorie écrans", () => {
    cy.contains("Monitors").click();
    cy.get("#tbodyid .card").each((produit) => {
      cy.wrap(produit).find(".card-img-top").should("be.visible");
      cy.wrap(produit).find(".card-title").should("be.visible");
      cy.wrap(produit).find("h5").should("be.visible");
      cy.wrap(produit).find(".card-text").should("be.visible");
    });
  });
});

describe("Navigation entre les catégorie de produits", () => {
  const categories = ["Phones", "Laptops", "Monitors"];

  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  categories.forEach((categorie) => {
    it("Devrait afficher les produits de la catégorie téléphones", () => {
      cy.contains(categorie).click();
      cy.wait(500);
      cy.get("#tbodyid .card").each((produit) => {
        cy.wrap(produit).find(".card-img-top").should("be.visible");
        cy.wrap(produit).find(".card-title").should("be.visible");
        cy.wrap(produit).find("h5").should("be.visible");
        cy.wrap(produit).find(".card-text").should("be.visible");
      });
      cy.percySnapshot(`${categorie} Category`);
    });
  });
});
