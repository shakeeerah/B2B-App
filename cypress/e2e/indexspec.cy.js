let elements
let data
describe('Test Mima Business', () => {
  before(() => {
    cy.fixture('selectors').then((attr)  => {
      elements = attr.userElement
      data = attr.userData
    })
  })
  it.skip('successful sign-up', () => {

    cy.ClickAnElement(elements.signupLink)
    cy.fillFirstPage()
    cy.fillSecondPage()
    cy.verifyOTPPage()

    
  })

  it('successful log-in', () => {
    cy.login()
    
   
  })

  it('Create an Invoice', () => {
    cy.login()
    cy.createAnInvoice()
    
   


  })
})