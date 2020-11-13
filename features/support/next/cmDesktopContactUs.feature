@international @desktop @footer
Feature: Platform Mod International Contact Us
    In order to be taken to correct location on the Next site
    As a user in all next international
    I want to be taken to the correct location from the footer links

    @contactus
    Scenario Outline: Platform Mod Footer Check Contact Us Page is Displayed
        Given I am an "anonymous" user on "desktop" visiting "<domain>" viewing "HomePage" page
        When I select the "Contact Us" link from the footer
        Then I should be taken to the Contact us page

        Examples:
            | domain       |
            | Armenia      |
            | Australia    |
            | Austria      |
            | Azerbaijan   |
            | Bahrain      |
            | Bulgaria     |
            | Canada       |
            | Croatia      |
            | Cyprus       |
            | Czech        |
            | Denmark      |
            | Estonia      |
            | Finland      |
            | France       |
            | Georgia      |
            | Gibraltar    |
            | Greece       |
            | Hungary      |
            | Iceland      |
            | Indonesia    |
            | Italy        |
            | Kuwait       |
            | Latvia       |
            | Lebanon      |
            | Lithuania    |
            | Luxembourg   |
            | Malaysia     |
            | Malta        |
            | Mexico       |
            | New_Zealand  |
            | Norway       |
            | Oman         |
            | Philippines  |
            | Portugal     |
            | Qatar        |
            | Romania      |
            | Serbia       |
            | Singapore    |
            | South_Africa |
            | South_Korea  |
            | Spain        |
            | Sweden       |
            | Switzerland  |
            | Taiwan       |
            | Thailand     |
            | Turkey       |
            #| UAE          |
            #| UK           |
            #| Ukraine      |
            | USA          |

