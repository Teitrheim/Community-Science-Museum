describe("Homepage Load Test", () => {
  it("successfully loads the homepage", () => {
    cy.visit("https://dulcet-blini-6d6477.netlify.app/");
    cy.get("header").should("exist");
    cy.get("h1").contains("Community Science Museum");
  });
});
