@international   @desktop @ignore @footer @sitemap
Feature: Platform Mod International Sitemap page
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    Scenario: Platform Mod Footer Check Sitemap Page is Displayed
        Given I am an "anonymous" user on "desktop" visiting "Armenia" viewing "HomePage" page
        When I select the "Sitemap" link from the footer
        Then I should be taken to the Sitemap page