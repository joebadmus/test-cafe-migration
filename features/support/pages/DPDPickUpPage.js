const DPDPickUpContentSection = require('../pagesection/DPDPickUpContentSection').DPDPickUpContentSection;
const FooterSection = require('../pagesection/FooterSection').FooterSection;


const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

exports.DPDPickUpPage = {

    goto: function(){
        return select('a').withText('DPD Pick Up');
    },

    dpdPickUpContentSection:function (){
        return DPDPickUpContentSection;
    },

    footerSection: function () {
        return FooterSection;
    }

}
