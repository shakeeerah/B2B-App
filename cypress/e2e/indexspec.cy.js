let elements
let data
describe('Test Mima Business', () => {
  before(() => {
    cy.fixture('selectors').then((attr)  => {
      elements = attr.userElement
      data = attr.userData
    })
  })
  it('successful sign-up', () => {

    cy.ClickAnElement(elements.signupLink)
    cy.fillFirstPage()
    cy.fillSecondPage()
    cy.verifyOTPPage()

  
    
  })

  it.only('successful log-in', () => {
    cy.ClickAnElement(elements.loginLink)
    cy.login()
    
   


  })
})