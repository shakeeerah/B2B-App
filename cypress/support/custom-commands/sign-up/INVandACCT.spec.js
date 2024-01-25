import {faker} from "@faker-js/faker"
let elements    
let data
before(()=> {
    cy.fixture('selectors').then((attr) => {
        elements = attr.userElement
        data = attr.userData
    })
    
})
Cypress.Commands.add('ClickAnElement', (element)=>{
    cy.get(element).should('be.visible').and('exist').click()

})
Cypress.Commands.add('typeAtext', (textField, text) =>{
    cy.get(textField).should('be.visible').fill(text)
})
Cypress.Commands.add('createAnInvoice', () =>{
    cy.contains(elements.InvoiceandAccounting).click()
    cy.contains(elements.Invoiceandreceipt).should('be.visible').click()
    cy.contains(elements.CreateNewInvoice).should('be.visible').click()
    cy.ClickAnElement(elements.CustClick)
    cy.ClickAnElement(elements.CustNameSearch)
    cy.ClickAnElement(elements.CurrencyClick)
    cy.ClickAnElement(elements.SelectCurrency)
    cy.ClickAnElement(elements.SelectSalesChannel)
    cy.ClickAnElement(elements.SelectSalesChanOption)
    cy.typeAtext(elements.ProductTextArea, faker.commerce.productName())
    cy.typeAtext(elements.AmountInputBox, faker.commerce.price({ min: 5000, max: 10000}))
    cy.typeAtext(elements.QuantityInputBox, data.QuantityInput)
    cy.typeAtext(elements.ShippingFeeInputBox, faker.commerce.price({ min: 1000, max: 2000}))
    cy.typeAtext(elements.DiscountFeeInputBox, faker.commerce.price({ min: 500, max:1000}))
    //cy.ClickAnElement(elements.acceptPartPayment)
    //cy.ClickAnElement(".Modal_content__z2Bau").scrollTo('bottom')
    cy.get(elements.dueDateInputBox).scrollIntoView()
    cy.ClickAnElement('.react-datepicker__input-container')
    cy.ClickAnElement(elements.selectDueDate)
    cy.typeAtext(elements.noteBox, data.CustNotes)
    cy.ClickAnElement(elements.continueButton)
    cy.contains('Success').should('be.visible')

    

})