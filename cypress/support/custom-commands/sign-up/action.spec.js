let selector
before(()=> {
    cy.fixture('element').then((attributes) => {
    selector = attributes

    })
})
   
Cypress.Commands.add('ClickAnElement', (element) => {
    cy.get(element).should('be.visible').and('exist').click()

})
Cypress.Commands.add('typeAtext', (textField, text) => {
    cy.get(textField).should('be.visible').type(text)


})
Cypress.Commands.add('fillFirstPage',() => {
    cy.typeAtext(selector.fullnameField, selector.fullname)
    cy.typeAtext(selector.businessnameField, selector.businessname)
    cy.typeAtext(selector.businessemailField, selector.businessemail)
    cy.typeAtext(selector.phonenumberField, selector.phonenumber)
    cy.typeAtext(selector.BusinessregnumberField, selector.Businessregnumber)
  
})
Cypress.Commands.add('fillSecondPage',() =>{
    cy.typeAtext(selector.websiteField, selector.website)
    cy.typeAtext(selector.instagramField, selector.instagram)
    cy.typeAtext(selector.twitterField, selector.twitter)
    cy.typeAtext(selector.passwordField, selector.password)
    cy.ClickAnElement(selector.HowYouKnowSelect)
    cy.ClickAnElement(selector.HowYouKnow)
    cy.typeAtext(selector.passwordField, selector.password)
})

