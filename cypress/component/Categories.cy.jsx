import { BrowserRouter } from "react-router-dom";
import Categories from "../../src/layouts/Categories.jsx";

const mountCategories = () => {
  cy.mount(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>
  );
};

describe("Categories Component (unit tests)", () => {
  beforeEach(() => {
    mountCategories();
  });

  it("рендерить заголовок сторінки", () => {
    cy.contains("Категорії").should("exist");
  });

  it("рендерить список категорій (6 елементів)", () => {
    cy.get(".categories-list").children().should("have.length", 6);
  });

  it("кожна категорія має свій розділювач", () => {
    cy.get(".category-divider").should("have.length", 6);
  });

  it("кожна категорія відображає назву", () => {
    const names = [
      "Планети",
      "Зорі",
      "Галактики",
      "Чорні діри",
      "Космічні явища",
      "Місії та апарати",
    ];

    names.forEach((name) => {
      cy.contains(name).should("exist");
    });
  });

  it("кожна категорія містить опис", () => {
    cy.get(".category-description").should("have.length", 6);
  });

  it("кожна категорія має іконку та зображення", () => {
    cy.get(".category-card img").should("have.length", 12);
  });
});
