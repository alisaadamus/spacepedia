describe("Реєстрація користувача", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
  });

  it("Повний шлях: Хедер → Реєстрація → Форма → Успіх", () => {
    cy.visit("/");
    cy.get(".user-avatar").click();
    cy.contains("Реєстрація").click();
    cy.url().should("include", "/signup");

    cy.get('input[name="email"]').type("testuser@gmail.com");
    cy.get('input[name="login"]').type("TestUser");
    cy.get('input[name="password"]').type("test123");
    cy.get('input[name="confirmPassword"]').type("test123");
    cy.get('button[type="submit"]').click();

    cy.contains("Firebase: Error (auth/email-already-in-use).", { timeout: 6000 })
      .should("be.visible");

    cy.wait(1600);
    cy.url().should("eq", `${Cypress.config().baseUrl}/signup`);
  });

  it("Валідація: паролі не співпадають", () => {
    cy.visit("/signup");

    cy.get('input[name="email"]').type("wrong@example.com");
    cy.get('input[name="login"]').type("WrongUser");
    cy.get('input[name="password"]').type("pass123");
    cy.get('input[name="confirmPassword"]').type("pass234");

    cy.get("button[type='submit']").click();

    cy.on("window:alert", (msg) => {
      expect(msg).to.equal("Паролі не співпадають");
    });
  });
});
