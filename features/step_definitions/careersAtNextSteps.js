const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const pageHelper = require('../../helper/PagerHelper').PagerHelper;


Then("I should be taken to the Careers at next page", async function () {
    let careersAtNextPage = pageHelper.create("Careers@NextPage");
    await testController.expect(careersAtNextPage.careersAtNextContentSection().verifyPageIsDisplayed()).ok;
});