const FooterSection = require('../pagesection/FooterSection').FooterSection;
const TermsAndConditionsContentSection = require('../pagesection/TermsAndConditionsContentSection').TermsAndConditionsContentSection;
const HeaderTopBarSection = require('../pagesection/HeaderTopBarSection').HeaderTopBarSection;

function select(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}

exports.TermsAndConditionsPage = {

  goto: function () {
    return select('a').withText('Terms & Conditions');
  },

  headerTopBarSection: function () {
    return HeaderTopBarSection;
  },

  footerSection: function () {
    return FooterSection;
  },

  termsAndConditionsContentSection: function () {
    return TermsAndConditionsContentSection;
  }
};

