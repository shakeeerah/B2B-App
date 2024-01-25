import{faker} from '@faker-js/faker'
import { Faker, en } from '@faker-js/faker';
const fakeGen = new Faker({ locale: [en] });
const randoNum = Math.floor(Math.random()*99)
const finalEmail = fakeGen.internet.email({
    firstName: 'meezlape+', 
    lastName: randoNum, 
    provider: 'gmail.com' });


let elements    
let data
const password = Cypress.env('PASSWORD')
let inboxId
let emailAdd
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
Cypress.Commands.add('insertEmail', () => {
    cy.mailslurp().then(mail => mail.createInbox()).then(inbox =>{
        inboxId= inbox.id
        emailAdd = inbox.emailAddress
        cy.typeAtext(elements.businessemailField, emailAdd)
    })

    })

    Cypress.Commands.add('retrieveOTP', () => {
        cy.mailslurp().then(mail => mail.waitForLatestEmail(inboxId, 30000, true))
        .then(email =>{
            const emailBody = email.body
            const domParser = new DOMParser()
            const emailPage = domParser.parseFromString(emailBody, 'text/html')
            const otpNum = emailPage.querySelector('[class] tr:nth-of-type(2) strong')
            .textContent
            const otp = otpNum.trim()
            cy.log(otp)

            cy.get(elements.OTPField).each((el,ind) =>{
                cy.wrap(el).should('be.visible').fill(otp[ind])

        })
        })
     })
    

Cypress.Commands.add('fillFirstPage',() => {
    cy.typeAtext(elements.fullnameField, data.fullname)
    cy.typeAtext(elements.businessnameField, data.businessname)
    cy.insertEmail()
    //cy.typeAtext(elements.businessemailField, finalEmail)
    cy.typeAtext(elements.phonenumberField, faker.phone.number('08011########'))
    cy.typeAtext(elements.BusinessregnumberField, data.Businessregnumber)
    cy.ClickAnElement(elements.nextButton)
  
})
Cypress.Commands.add('fillSecondPage',() =>{
    cy.typeAtext(elements.websiteField, data.website)
    cy.typeAtext(elements.instagramField, data.instagram)
    cy.typeAtext(elements.twitterField, data.twitter)
    cy.ClickAnElement(elements.HowYouKnowSelect)
    cy.ClickAnElement(elements.HowYouKnow)
    cy.typeAtext(elements.passwordField, password)
    cy.ClickAnElement(elements.signupButton)
   
})
Cypress.Commands.add('verifyOTPPage',() => {
    cy.get(elements.OTPPage).should('be.visible').and('contain', data.OTPpagemessage2)
    cy.get(elements.OTPField).each((el,ind) =>{
        cy.wrap(el).should('be.visible')

    }) 
    cy.retrieveOTP()
})
Cypress.Commands.add('login', () => {
    
    cy.ClickAnElement(elements.loginLink)
    cy.typeAtext(elements.loginEmailField, data.loginEmail)
    cy.typeAtext(elements.loginPasswordField, password)
    cy.ClickAnElement(elements.loginButton)

})
