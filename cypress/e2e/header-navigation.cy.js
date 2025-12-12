describe("Навігація хедера", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.visit("/");
  });

  it("відображає всі навігаційні лінки", () => {
    cy.contains("Головна").should("be.visible");
    cy.contains("Категорії").should("be.visible");
    cy.contains("Контакти").should("be.visible");
  });

  it("переходить на Головну", () => {
    cy.contains("Головна").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("переходить на Категорії", () => {
    cy.contains("Категорії").click();
    cy.url().should("include", "/category");
  });

  it("переходить на Контакти", () => {
    cy.contains("Контакти").click();
    cy.url().should("include", "/contacts");
  });

  it("меню гостьового користувача відкривається і закривається", () => {
    cy.get(".user-avatar").click();
    cy.contains("Вхід").should("be.visible");

    cy.get("body").click(0, 0);
    cy.contains("Вхід").should("not.exist");
  });

  it("перехід на Вхід з меню", () => {
    cy.get(".user-avatar").click();
    cy.contains("Вхід").click();
    cy.url().should("include", "/login");
  });

  it("перехід на Реєстрацію з меню", () => {
    cy.get(".user-avatar").click();
    cy.contains("Реєстрація").click();
    cy.url().should("include", "/signup");
  });
});
