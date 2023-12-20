Cypress.Commands.add('ClickAnElement', (element) => {
    cy.get(element).should('be.visible').and('exist').click()

})
Cypress.Commands.add('typeAtext', (textField, text) => {
    cy.get(textField).should('be.visible').type(text)


})

