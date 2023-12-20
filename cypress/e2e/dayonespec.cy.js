describe('Test Mima Business', () => {
  it('successful sign-up', () => {
    cy.visit('/')
    cy.ClickAnElement('[class ="sc-imWYAI bMCZbA"]')
    cy.typeAtext('#fullname', 'Shakii baby')
    cy.typeAtext('#businessname', 'Shakii Store')
  })

  it('successful login', () => {
    cy.visit('/')
    cy.ClickAnElement('[class ="sc-imWYAI hgdAmX"]')


  })
})