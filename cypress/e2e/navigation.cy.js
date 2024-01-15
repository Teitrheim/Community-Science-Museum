describe("Navigation Test", () => {
  it("navigates through main links", () => {
    cy.visit("https://dulcet-blini-6d6477.netlify.app/");

    // Update the link texts to match the text exactly as they appear on the website
    const links = ["Contact", "Support", "About", "Menu"];

    links.forEach((linkText) => {
      const link = linkText.toLowerCase().replace(/\s+/g, ""); // Replace spaces with nothing for URL
      cy.contains(linkText).click({ force: true });
      cy.url().should("include", `/${link}`); // Use the modified link for URL structure
      cy.go("back");
    });
  });
});
