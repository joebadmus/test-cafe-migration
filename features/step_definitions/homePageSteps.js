const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;

const pageHelper = require('../../helper/PagerHelper').PagerHelper;
const testdataHelper = require('../../helper/TestdataHelper').TestDataHelper;
const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

Given('I am an {string} user on {string} visiting {string} viewing {string} page', async function (testUser, modeType, country, currentPage) {
    testdataHelper.setTestCountry(country)

    let page = pageHelper.create("HomePage");
    await testController.navigateTo(page.goto());


    let testpage = pageHelper.create(currentPage);
    globalThis.testpage = testpage;
    // await testController.click(testpage.goto());

});

When("I select the {string} link from the footer", async function (footerOption) {
    let footerLinks = testdataHelper.getFooterLinks(globalThis.countryUnderTest.code);
    let footerIndex = testdataHelper.getInternationalFooterIndex(footerOption);
    await testController.click(testpage.footerSection().selectFootByText(footerLinks[footerIndex].linkText));
});

