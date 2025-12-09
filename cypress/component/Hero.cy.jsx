import Hero from "../../src/layouts/Hero.jsx";

describe("Hero Component (unit tests)", () => {
  it("рендерить заголовок і опис", () => {
    cy.mount(<Hero title="Test Title" description="Test Description" />);

    cy.get(".hero-title").should("contain.text", "Test Title");
    cy.get(".hero-description").should("contain.text", "Test Description");
  });

  it("не рендерить статистику, якщо isMainPage= false", () => {
    cy.mount(<Hero title="Title" description="Опис" />);

    cy.get(".hero-stats").should("not.exist");
  });

  it("рендерить статистику якщо isMainPage=true", () => {
    cy.mount(
      <Hero
        title="Title"
        description="Desc"
        isMainPage={true}
      />
    );

    cy.get(".hero-stats").should("exist");
    cy.get(".stat").should("have.length", 3);
  });

  it("має правильні значення статистики", () => {
    cy.mount(
      <Hero
        title="Title"
        description="Desc"
        isMainPage={true}
      />
    );

    cy.contains("100+").should("exist");
    cy.contains("Статей").should("exist");

    cy.contains("50+").should("exist");
    cy.contains("Категорій").should("exist");

    cy.contains("24/7").should("exist");
    cy.contains("Оновлення").should("exist");
  });

  it("має фонові елементи (stars, twinkling, clouds)", () => {
    cy.mount(<Hero title="Title" description="Опис" />);

    cy.get(".stars").should("exist");
    cy.get(".twinkling").should("exist");
    cy.get(".clouds").should("exist");
  });
});
