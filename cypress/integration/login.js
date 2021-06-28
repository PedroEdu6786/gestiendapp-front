describe("Logins correctly", () => {
  it("Renders correctly", () => {
    cy.visit('/login')
    cy.get('#email').should('exist')
    cy.get('#password').should('exist')
    cy.visit('/store')
  })
})