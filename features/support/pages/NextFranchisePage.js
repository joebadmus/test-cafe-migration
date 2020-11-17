const FooterSection = require('../pagesection/FooterSection').FooterSection;
const NextFranchiseMainGridSection = require('../pagesection/NextFranchiseMainGridSection').NextFranchiseMainGridSection;
const HeaderTopBarSection = require('../pagesection/HeaderTopBarSection').HeaderTopBarSection;

function select(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}

exports.NextFranchisePage = {

  goto: function () {
    return select('a').withText('Next Franchise');
  },

  headerTopBarSection: function () {
    return HeaderTopBarSection;
  },

  footerSection: function () {
    return FooterSection;
  },

  nextFranchiseMainGridSection: function () {
    return NextFranchiseMainGridSection;
  }
};

