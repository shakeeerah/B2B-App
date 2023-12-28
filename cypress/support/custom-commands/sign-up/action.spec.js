let elements
let data
before(()=> {
    cy.fixture('selectors').then((attr) => {
        elements = attr.userElement
        data = attr.userData
    })
})
   
Cypress.Commands.add('ClickAnElement', (element) => {
    cy.get(element).should('be.visible').and('exist').click()

})
Cypress.Commands.add('typeAtext', (textField, text) => {
    cy.get(textField).should('be.visible').fill(text)


})
Cypress.Commands.add('fillFirstPage',() => {
    cy.typeAtext(elements.fullnameField, data.fullname)
    cy.typeAtext(elements.businessnameField, data.businessname)
    cy.typeAtext(elements.businessemailField, data.businessemail)
    cy.typeAtext(elements.phonenumberField, data.phonenumber)
    cy.typeAtext(elements.BusinessregnumberField, data.Businessregnumber)
    cy.ClickAnElement(elements.nextButton)
  
})
Cypress.Commands.add('fillSecondPage',() =>{
    cy.typeAtext(elements.websiteField, data.website)
    cy.typeAtext(elements.instagramField, data.instagram)
    cy.typeAtext(elements.twitterField, data.twitter)
    cy.ClickAnElement(elements.HowYouKnowSelect)
    cy.ClickAnElement(elements.HowYouKnow)
    cy.typeAtext(elements.passwordField, data.password)
    cy.ClickAnElement(elements.signupButton)
   
})
Cypress.Commands.add('verifyOTPPage',() => {
    cy.get(elements.OTPPage).should('be.visible').and('contain', data.OTPpagemessage2)
    cy.get(elements.OTPField).each((el, ind) =>{
        cy.wrap(el).should('be.visible')

    }) 
})

