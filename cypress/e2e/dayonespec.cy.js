let selector
describe('Test Mima Business', () => {
  before(() => {
    cy.fixture('element').then((attributes)  => {
      selector = attributes
    })
  })
  it('successful sign-up', () => {

    cy.ClickAnElement(selector.signupLink)
    cy.fillFirstPage()
    cy.ClickAnElement(selector.nextButton)
    cy.fillSecondPage()
    cy.ClickAnElement(selector.signupButton)
    cy.contains(selector.OTPpagemessage1).should('be.visible').and('exist')
    cy.contains(selector.OTPpagemessage2).should("be.visible").and('exist')
    
  })

  /*it('successful login', () => {
    cy.ClickAnElement(selector.loginButton)


  })*/
})