const FooterSection = require('../pagesection/FooterSection').FooterSection;
const StorefrontContentSection = require('../pagesection/StorefrontContentSection').StorefrontContentSection;
const HeaderTopBarSection = require('../pagesection/HeaderTopBarSection').HeaderTopBarSection;

function select(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}

exports.ShippingInformationPage = {

  goto: function () {
    return select('a').withText('Shipping Information');
  },

  headerTopBarSection: function () {
    return HeaderTopBarSection;
  },

  footerSection: function () {
    return FooterSection;
  },

  storefrontContentSection: function () {
    return StorefrontContentSection;
  }
};

