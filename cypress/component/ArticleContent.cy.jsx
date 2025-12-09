import { BrowserRouter } from "react-router-dom";
import ArticleContent from "../../src/layouts/ArticleContent.jsx";

const mountArticle = () => {
  cy.mount(
    <BrowserRouter>
      <ArticleContent />
    </BrowserRouter>
  );
};

describe("ArticleContent Component (unit tests)", () => {
  beforeEach(() => {
    mountArticle();
  });

  it("рендерить заголовок статті", () => {
    cy.contains("Сатурн та його кільця").should("exist");
  });

  it("рендерить всі абзаци Paragraph", () => {
    cy.get(".paragraph").should("have.length", 5);
  });

  it("відображає перший абзац без зображення", () => {
    cy.get(".paragraph").eq(0).find("img").should("not.exist");
  });

  it("відображає Paragraph з лівим зображенням", () => {
    cy.get(".paragraph").eq(1).find("img").should("have.attr", "src", "images/saturn-rings.webp");
  });

  it("рендерить Paragraph з imageOnly=true", () => {
    cy.get(".paragraph").eq(2).find("img")
      .should("have.attr", "src", "images/saturn.jpg");
  });

  it("відображає Paragraph із правим зображенням", () => {
    cy.get(".paragraph").eq(4).find("img")
      .should("have.attr", "src", "images/saturn-storm.jpg");
  });

  it("перевіряє наявність iframe відео", () => {
    cy.get("iframe")
      .should("have.attr", "src")
      .and("contain", "youtube.com");
  });

  it("рендерить кнопки навігації (Попередня Наступна)", () => {
    cy.contains("← Попередня").should("exist");
    cy.contains("Наступна →").should("exist");
  });
});
