import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



Given('I navigate to Instamotion Homepage', () => {
    cy.visit('https://www.instamotion.com/')
})

When('I check for title', () => {
    cy.get('#onetrust-button-group-parent').contains('Akzeptieren').click({force: true})
    
})

Then('I should see it as - Geprüfte Gebrauchtwagen mit Garantie | InstaMotion', () => {
    cy.title().should('eq','Geprüfte Gebrauchtwagen mit Garantie | InstaMotion')
    
})