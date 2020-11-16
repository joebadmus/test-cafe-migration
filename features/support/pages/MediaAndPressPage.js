const MediaAndPressContentSection = require('../pagesection/MediaAndPressContentSection').MediaAndPressContentSection;
const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

exports.MediaAndPressPage = {

    goto: function () {
        return select('a').withText('Media & Press');
    },

    mediaAndPressContentSection: function () {
        return MediaAndPressContentSection;
    },

    footerSection: function () {
        return FooterSection;
    }
}
