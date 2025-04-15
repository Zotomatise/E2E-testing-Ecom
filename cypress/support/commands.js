Cypress.Commands.add("CreateUser", (username, password) => {
  cy.get("#signin2").click();
  cy.get("#sign-username").type(username, { force: true });
  cy.get("#sign-password").type(password, { force: true });
  cy.get(".btn-primary").contains("Sign up").click();

  cy.on("window:alert", (validerAvecSucces) => {
    expect(validerAvecSucces).to.equal("Sign up successful.");
  });
});

Cypress.Commands.add("Login", (username, password) => {
  cy.get("#login2").click();
  cy.get("#loginusername").type(username, { force: true });
  cy.get("#loginpassword").type(password, { force: true });
  cy.get(".btn-primary").contains("Log in").click();
});
