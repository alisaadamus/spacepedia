import { BrowserRouter } from 'react-router-dom';
import Articles from '../../src/layouts/Articles.jsx';

const mountArticles = () => {
  cy.mount(
    <BrowserRouter>
      <Articles />
    </BrowserRouter>
  );
};

describe("Articles Component (unit tests)", () => {
  beforeEach(() => {
    mountArticles();
  });

  it("рендерить заголовок сторінки", () => {
    cy.contains("Статті").should("exist");
  });

  it("рендерить інпут пошуку", () => {
    cy.get("input[placeholder='Пошук...']").should("exist");
  });

  it("рендерить три кнопки сортування/фільтрів", () => {
    cy.contains("Фільтри").should("exist");
    cy.contains("Назва ↑↓").should("exist");
    cy.contains("Тривалість вивчення ↑↓").should("exist");
  });

  it("рендерить список зі 4 статей", () => {
    cy.get(".articles-list > div").should("have.length", 4);
  });

  it("кожна стаття відображає заголовок", () => {
    const titles = [
      "Марс: Червона планета",
      "Венера: Сестра Землі",
      "Екзопланети: Світи за межами",
      "Сатурн та його кільця"
    ];

    titles.forEach(title => {
      cy.contains(title).should("exist");
    });
  });

  it("перевірка кількості зображень (2 з 4 мають image)", () => {
    cy.get("img").should("have.length", 2);
  });

  it("перевірка наявності розділювачів між статтями (3)", () => {
    cy.get(".article-divider").should("have.length", 3);
  });
});
