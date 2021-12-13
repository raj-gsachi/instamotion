Feature: Navigate to Instamotion homepage

    I want to navigate to home page and validate title

    Scenario: Search car based on the brand and model
        Given I navigate to Instamotion Homepage
        When I check for title
        Then I should see it as - Geprüfte Gebrauchtwagen mit Garantie | InstaMotion

