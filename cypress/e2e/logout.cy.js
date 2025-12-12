describe("Вихід з аккаунта", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
  });

  it("успішний вихід", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("testuser@example.com");
    cy.get('input[name="password"]').type("TestPass123");

    cy.get('button[type="submit"]').click();
    cy.get(".user-avatar", { timeout: 6000 }).should("exist");
    cy.get(".user-avatar").click();
    cy.contains("Вийти").click();

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.get(".user-avatar").click();
    cy.contains("Вхід").should("be.visible");
    cy.contains("Реєстрація").should("be.visible");
  });
});
