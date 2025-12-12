describe("Наскрізна навігація по сторінках сайту", () => {

  it("Головна сторінка → Категорії", () => {
    cy.visit("/");

    cy.url().should("include", "/");

    cy.contains("Welcome to Spacepedia").should("be.visible");
    cy.contains("Категорії").should("exist");

    cy.contains("Категорії").click();
    cy.url().should("include", "/category");
    cy.contains("Планети").should("be.visible");
  });

  it("Категорії → Стаття", () => {
    cy.visit("/category");

    cy.url().should("include", "/category");
    cy.contains("Статті").should("be.visible");
    cy.contains("Марс: Червона планета").should("exist");
    cy.contains("Марс: Червона планета")
      .parents(".article-card")
      .find("button")
      .click();

    cy.url().should("include", "/article");

    cy.contains("Сатурн та його кільця").should("be.visible");
  });

  it("Перевірка сторінки статті", () => {
    cy.visit("/article");

    cy.url().should("include", "/article");

    cy.contains("Сатурн та його кільця").should("exist");
    cy.contains("← Попередня").should("be.visible");
    cy.contains("Наступна →").should("be.visible");
    cy.get("iframe").should("exist");
  });

});
