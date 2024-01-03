import { faker } from "@faker-js/faker"
import { Faker, en } from '@faker-js/faker';
const fakeGen = new Faker({ locale: [en] });
const randoNum = Math.floor(Math.random()*99)
const rawEmail = fakeGen.internet.email({
    firstName: 'meezlape+', 
    lastName: randoNum, 
    provider: 'gmail.com' });


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
Cypress.Commands.add('addACustomer', () =>{
    cy.contains(elements.customerIcon).click()
    cy.contains(elements.addCustomerIcon).click()
    cy.typeAtext(elements.NameTextBox, faker.person.fullName())
    cy.typeAtext(elements.PhonenumberTextBox, faker.phone.number('0801#########'))
    cy.typeAtext(elements.CustEmailTextBox, rawEmail)
    cy.ClickAnElement(elements.custGender)
    cy.typeAtext(elements.CustAddressTextBox, faker.location.streetAddress())
    cy.typeAtext(elements.CustNotesBox, data.CustNotes)
    cy.ClickAnElement(elements.custSave)
    cy.contains('Success').should('be.visible')

})