const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.MediaAndPressContentSection = {
    verifyPageIsDisplayed: function () {
        return select("#nav-media-level1").withAttribute('type', 'li').selected;
    },

    acceptCookieConsent: function () {
        return select('#cc-saveAll-startBtn');
    }
}
