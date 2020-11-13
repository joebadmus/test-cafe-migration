const TheCompanyContentSection = require('../pagesection/TheCompanyContentSection').TheCompanyContentSection;
const FooterSection = require('../pagesection/FooterSection').FooterSection;


const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

exports.TheCompanyPage = {

    goto: function(){
        return select('a').withText('The Company');
    },

    theCompanyContentSection:function (){
        return TheCompanyContentSection;
    },

    footerSection: function () {
        return FooterSection;
    }

}
