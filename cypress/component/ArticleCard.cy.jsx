import { MemoryRouter } from "react-router-dom";
import ArticleCard from "../../src/components/ArticleCard";

describe("ArticleCard component", () => {
  const mockProps = {
    title: "Чорні діри",
    description: "Дуже великий опис",
    image: "/test-image.png",
    imagePosition: "right",
    readTime: "5 хв",
  };

  const mountCard = (props = mockProps) =>
    cy.mount(
      <MemoryRouter>
        <ArticleCard {...props} />
      </MemoryRouter>
    );

  it("рендерить заголовок опис і час читання", () => {
    mountCard();

    cy.contains("Чорні діри").should("be.visible");
    cy.contains("Дуже великий опис").should("be.visible");
    cy.contains("5 хв").should("be.visible");
  });

  it("рендерить картинку коли передано", () => {
    mountCard();

    cy.get("img.article-image")
      .should("have.attr", "src", mockProps.image)
      .and("have.attr", "alt", mockProps.title);
  });

  it("не рендерить картинку коли imagePosition=none", () => {
    mountCard({ ...mockProps, imagePosition: "none" });

    cy.get("img").should("not.exist");
  });

  it("застосовує правильний клас позиції зображення", () => {
    mountCard();

    cy.get(".article-card-inner")
      .should("have.class", "article-card-right")
      .and("have.class", "article-card-with-image");
  });

  it("рендерить кнопку", () => {
    mountCard();

    cy.contains("Перейти →").should("be.visible");
  });
});
