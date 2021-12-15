import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'


Given('I navigate to Instamotion Homepage', () => {
    cy.visit('https://www.instamotion.com/')
})

When('I select a Marke & Modell', ()=>{
    cy.get('#downshift-1390-input').click().contains('BMW').click()
})

And('I click on Search button containing Treffer', () => {
    cy.get('.HeroSearchstyled__HeroSearchBottom-sc-1c6baod-1 cSjidB').click()
})

Then('I should see the Car Results page is displayed',() =>{
    cy.get('.sc-jhaWeW byMdQU').then($page =>{
        if($page.is(':visible')){
            cy.log('Page is visible')
        }
    })
})