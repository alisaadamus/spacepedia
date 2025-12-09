import Paragraph from "../../src/components/Paragraph";

describe("Paragraph component", () => {

  it("рендерить картинку тільки коли imageOnly=true", () => {
    cy.mount(
      <Paragraph
        image="/photo.png"
        imageAlt="Test image"
        imageOnly={true}
      />
    );

    cy.get(".paragraph-image-only img")
      .should("have.attr", "src", "/photo.png")
      .and("have.attr", "alt", "Test image");

    cy.get("p").should("not.exist");
  });

  it("рендерить текст і картинку коли передано пропс image", () => {
    cy.mount(
      <Paragraph
        image="/photo.png"
        imageAlt="Galaxy"
        imagePosition="right"
      >
        Paragraph text here
      </Paragraph>
    );

    cy.contains("Paragraph text here").should("be.visible");

    cy.get("img.paragraph-image")
      .should("have.attr", "src", "/photo.png")
      .and("have.attr", "alt", "Galaxy");

    cy.get(".paragraph-with-image").should("exist");
    cy.get(".paragraph-right").should("exist");
  });

  it("рендерить тільки текст коли не передано зображення", () => {
    cy.mount(<Paragraph>Просто простий абзац</Paragraph>);

    cy.contains("Просто простий абзац").should("be.visible");

    cy.get("img").should("not.exist");
  });

});
