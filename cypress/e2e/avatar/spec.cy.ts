describe("Avatar", () => {
  before(() => {
    cy.intercept("/project/settings").as("settings");
    cy.visit("http://127.0.0.1:8000");
    cy.wait(["@settings"]);
  });

  it("should be able to display a nested CoT", () => {
    cy.get("#welcome-screen").should("exist");

    cy.get(".message").should("have.length", 3);

    cy.get(".message").eq(0).find(".message-avatar").should("have.length", 0);
    cy.get(".message").eq(1).find(".message-avatar").should("have.length", 1);
    cy.get(".message").eq(2).find(".message-avatar").should("have.length", 0);
  });
});
