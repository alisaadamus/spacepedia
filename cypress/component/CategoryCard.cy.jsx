import { MemoryRouter } from "react-router-dom";
import CategoryCard from "../../src/components/CategoryCard";

describe("CategoryCard component", () => {

  const mockProps = {
    name: "Планети",
    description: "Дуже великий опис",
    icon: "/test-icon.png",
    image: "/test-image.png",
    imagePosition: "left"
  };

  const mountWithRouter = (component) => {
    return cy.mount(<MemoryRouter>{component}</MemoryRouter>);
  };

  it("рендерить назву і опис", () => {
    mountWithRouter(<CategoryCard {...mockProps} />);
    cy.contains("Планети").should("be.visible");
    cy.contains("Дуже великий опис").should("be.visible");
  });

  it("рендерить іконку і зображення з правильними src", () => {
    mountWithRouter(<CategoryCard {...mockProps} />);
    cy.get("img").first().should("have.attr", "src", mockProps.icon);
    cy.get("img").last().should("have.attr", "src", mockProps.image);
  });

  it("застосовує правильний клас позиції зображення", () => {
    mountWithRouter(<CategoryCard {...mockProps} />);
    cy.get(".category-card")
      .should("have.class", "category-card-left");
  });
});
