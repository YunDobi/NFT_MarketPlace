describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:19006/')
    cy.contains('Place a bid')
    .click()
    cy.contains('ShowMore').click().should("be.visible")
  })
  
})