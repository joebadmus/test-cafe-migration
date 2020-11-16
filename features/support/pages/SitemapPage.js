const storefrontContentSection = require('../pagesection/StorefrontContentSection').StorefrontContentSection;
const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.SitemapPage = {

    goto: function(){
        return select('a').withText('Sitemap');
    },

    storefrontContentSection: function () {

        return storefrontContentSection;
    },

};