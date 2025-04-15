/// <reference types="cypress" />

describe("Visite de la page et vérification des élements clés", () => {
  before(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  it("Afficher correctement la page d'accueil avec tous les elements essentiels", () => {
    cy.title().should("eq", "STORE");
    cy.get(".navbar-brand").should("be.visible");
    debugger;
    cy.get("#navbarExample").within(() => {
      cy.contains("Home").should("be.visible");
      cy.contains("Contact").should("be.visible");
      cy.contains("About us").should("be.visible");
      cy.contains("Cart").should("be.visible");
      cy.contains("Log in").should("be.visible");
      cy.contains("Sign up").should("be.visible");
    });

    cy.get("#tbodyid .card").should("have.length.greaterThan", 0);
    cy.get("#tbodyid .card")
      .first()
      .within(() => {
        cy.get(".card-img-top").should("be.visible");
        cy.get(".card-title").should("be.visible");
        cy.get("h5").should("be.visible");
        cy.get(".card-text").should("be.visible");
      });
  });
});
