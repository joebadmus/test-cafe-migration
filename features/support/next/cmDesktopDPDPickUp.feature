@international @footer @desktop
Feature: Platform Mod International DPD Pick Up
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario: Platform Mod Footer Check DPD Pick Up Page is Displayed
        Given I am an "anonymous" user on "desktop" visiting "Luxembourg" viewing "HomePage" page
        When I select the "DPD Pick Up" link from the footer
        Then I should be taken to the DPD Pick Up page
