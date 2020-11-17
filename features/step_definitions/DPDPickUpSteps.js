const { Given, When, Then } = require('cucumber');
const pageHelper = require('../../helper/PagerHelper').PagerHelper;


Then("I should be taken to the DPD Pick Up page", async function () {

    let dpdPickUpPage = pageHelper.create("DPDPickUpPage");
    await testController.expect(dpdPickUpPage.dpdPickUpContentSection().verifyPageIsDisplayed()).ok;

});