const FooterSection = require('../pagesection/FooterSection').FooterSection;
const PrivacypolicyContentSection = require('../pagesection/PrivacypolicyContentSection').PrivacypolicyContentSection;
const HeaderTopBarSection = require('../pagesection/HeaderTopBarSection').HeaderTopBarSection;


function select(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}


exports.PrivacyPolicyPage = {

  goto: function(){
    return select('a').withText('Privacy Policy');
  },

  headerTopBarSection: function() {
    return HeaderTopBarSection;
  },

  privacypolicyContentSection: function() {
    return PrivacypolicyContentSection;
  },

  footerSection: function() {
    return FooterSection;
  }

};
