Feature: Search Cars for a brand and model
    As a user of Instamotion
    I should be able to search cars based on my search parameters

    Scenario: Verify cars are searched based on the brand and model
        Given Instamotion Homepage with a Search container
        When I select a Marke & Modell
        And I click on Search button containing Treffer
        Then I should see the Car Results page is displayed