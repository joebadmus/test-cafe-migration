const CareersAtNextContentSection = require('../pagesection/CareersAtNextContentSection').CareersAtNextContentSection;
const { Selector } = require('testcafe');


function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}


exports.CareersAtNextPage = {

    goto: function(){
        return select('a').withText('Careers@next');
    },

    careersAtNextContentSection:function (){
        return CareersAtNextContentSection;
    }

}
