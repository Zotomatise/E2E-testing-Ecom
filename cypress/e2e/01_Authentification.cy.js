/// <reference types="cypress" />

describe("Creer un compte, puis se connecter avec le nouvel utilisateur", () => {
  beforeEach(() => {
    const username = `Demo_${Date.now()}`;
    const password = "Password123";
    cy.writeFile("cypress/fixtures/user.json", { username, password });
    cy.visit("https://www.demoblaze.com/");
  });
  it("Création de compte utilisateur - Demo Git", () => {
    cy.fixture("user").then((user) => {
      cy.intercept("POST", "**/signup").as("compteUser");

      cy.CreateUser(user.username, user.password);
      cy.wait("@compteUser");
    });
  });
  it("Connexion avec le compte créé", () => {
    cy.fixture("user").then((user) => {
      cy.Login(user.username, user.password);
      cy.contains(`Welcome ${user.username}`).should("not.be.visible");
    });
  });
});
