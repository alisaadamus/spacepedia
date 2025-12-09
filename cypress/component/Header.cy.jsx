import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../src/context/AuthContext";
import Header from "./../../src/layouts/Header";

const mountHeader = () => {
  cy.mount(
    <BrowserRouter>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </BrowserRouter>
  );
};

describe("Header Component (Unit tests without mocks)", () => {

  it("рендерить логотип і навігацію", () => {
    mountHeader();

    cy.contains("Spacepedia").should("exist");
    cy.contains("Головна").should("exist");
    cy.contains("Категорії").should("exist");
    cy.contains("Контакти").should("exist");
  });

  it("відкриває дропдаун якщо користувач неавторизований", () => {
    mountHeader();

    cy.get(".user-avatar").click();

    cy.get(".dropdown-menu").should("exist");
    cy.contains("Вхід").should("exist");
    cy.contains("Реєстрація").should("exist");
  });

  it("повторний клік закриває дропдаун", () => {
    mountHeader();

    cy.get(".user-avatar").click();
    cy.get(".dropdown-menu").should("exist");

    cy.get(".user-avatar").click();
    cy.get(".dropdown-menu").should("not.exist");
  });

  it("клік поза дропдауном закриває його", () => {
    mountHeader();

    cy.get(".user-avatar").click();
    cy.get(".dropdown-menu").should("exist");

    cy.get("body").click(0, 0);
    cy.get(".dropdown-menu").should("not.exist");
  });

  it("не рендериться приватний контент без авторизації", () => {
    mountHeader();

    cy.contains("Вийти").should("not.exist");
    cy.contains("email").should("not.exist");
  });
});
