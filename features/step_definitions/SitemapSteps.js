const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const pageHelper = require('../../helper/PagerHelper').PagerHelper;


Then("I should be taken to the Sitemap page", async function () {
    let SitemapPage = pageHelper.create("SitemapPage");
    await testController.expect(SitemapPage.storefrontContentSection().verifyPageIsDisplayed()).ok;
});