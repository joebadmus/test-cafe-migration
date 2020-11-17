const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;



Then("I should be taken to the Returns Information page", async function () {
    let returnInformationPage = pageHelper.create("ReturnsInformationPage");

    await testController.expect(returnInformationPage.storefrontContentSection().verifyPageIsDisplayed()).ok;
});