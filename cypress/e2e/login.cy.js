describe("Авторизація користувача", () => {
  it("логін з правильними даними", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("testuser@example.com");
    cy.get('input[name="password"]').type("TestPass123");

    cy.contains("Увійти").click();

    cy.contains("Успішний вхід!", { timeout: 4000 }).should("be.visible");

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("помилка при неправильних даних", () => {
    cy.visit("/login");

    cy.get('input[name="email"]').type("notexist@example.com");
    cy.get('input[name="password"]').type("wrongpass");

    cy.contains("Увійти").click();

    cy.contains("Firebase: Error (auth/invalid-credential).", { timeout: 4000 }).should(
      "be.visible"
    );
  });
});
