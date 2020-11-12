const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;

const pageHelper = require('../../helper/PagerHelper').PagerHelper;


Then('I should be taken to the The Company page', async function () {
    let contactUsPage = pageHelper.create("TheCompanyPage");

    let va = contactUsPage.TheCompanyContentSection.verifyPageIsDisplayed();
    await testController.expect(va).ok;
    // await testController.expect(contactUsPage.StorefrontContentSection).ok;
    
});