import Footer from "../../src/layouts/Footer";

describe("Footer Component (unit tests)", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  it("рендериться без помилок", () => {
    cy.get(".footer").should("exist");
    cy.get(".footer-content").should("exist");
  });

  it("відображає коректний копірайт", () => {
    cy.contains("©2025 Spacepedia").should("exist");
  });

  it("містить список космічних категорій", () => {
    const categories = [
      "Планети",
      "Зорі",
      "Галактики",
      "Чорні діри",
      "Космічні явища",
      "Місії та апарати"
    ];

    categories.forEach((cat) => {
      cy.contains(cat).should("exist");
    });
  });

  it("містить контактну інформацію", () => {
    cy.contains("+380968070605").should("exist");
    cy.contains("alisa.adamus@student.uzhnu.edu.ua").should("exist");
    cy.contains("t.me/example").should("exist");
  });
});
