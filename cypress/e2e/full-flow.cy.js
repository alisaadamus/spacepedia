describe("Повний сценарій", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.visit("/");
  });

  it("Реєстрація → Вхід → Перегляд статей → Вихід", () => {
    cy.get(".user-avatar").click();
    cy.contains("Реєстрація").click();
    cy.get('input[name="email"]').type("flow@example.com");
    cy.get('input[name="login"]').type("FlowUser");
    cy.get('input[name="password"]').type("FlowPass123");
    cy.get('input[name="confirmPassword"]').type("FlowPass123");
    cy.contains("Зареєструватися").click();
    cy.contains("Firebase: Error (auth/email-already-in-use).", { timeout: 6000 }).should("be.visible");

    cy.wait(1600);
    cy.url().should("eq", `${Cypress.config().baseUrl}/signup`);
    cy.get(".user-avatar").click();
    cy.contains("Вхід").click();
    cy.get('input[name="email"]').type("flow@example.com");
    cy.get('input[name="password"]').type("FlowPass123");
    cy.contains("Увійти").click();

    cy.contains("Успішний вхід!", { timeout: 4000 }).should("be.visible");
    cy.wait(1600);
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
    cy.contains("Категорії").click();
    cy.url().should("include", "/category");

    cy.contains("Контакти").click();
    cy.url().should("include", "/contacts");

    cy.get(".user-avatar").click();
    cy.contains("Вийти").click();

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});
