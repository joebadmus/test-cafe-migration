const { Selector } = require('testcafe');
const FooterSection = require('../pagesection/FooterSection').FooterSection;



function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.HomePage = {

    goto: function () {
        return globalThis.countryUnderTest.url;
    },

    footerSection: function () {
        return FooterSection;
    }

}

