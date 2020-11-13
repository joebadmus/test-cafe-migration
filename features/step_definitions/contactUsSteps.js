const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const pageHelper = require('../../helper/PagerHelper').PagerHelper;


Then("I should be taken to the Contact us page", async function () {
    let contactUsPage = pageHelper.create("ContactUsPage");
    await testController.expect(contactUsPage.storefrontContentSection().verifyPageIsDisplayed()).ok;
});