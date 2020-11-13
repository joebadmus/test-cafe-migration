const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}


exports.TheCompanyContentSection = {

    goto: function() {
        return globalThis.countryUnderTest.url;
    },
    verifyPageIsDisplayed: function () {
        return select("#nav-media-level1").withAttribute('type', 'li').exists;
    },

    acceptCookieConsent: function () {
        return select('#cc-saveAll-startBtn');
    }

}
