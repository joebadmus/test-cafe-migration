const { storefrontContentSection } = require('../pagesection/StorefrontContentSection').StorefrontContentSection;
const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.ContactUsPage = {

    goto: function(){
        return select('a').withText('Contact Us');
    },

    storefrontContentSection: function () {

        return storefrontContentSection;
    },

};