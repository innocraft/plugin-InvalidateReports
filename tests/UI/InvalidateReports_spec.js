/*!
 * InnoCraft - the company of the makers of Piwik Analytics, the free/libre analytics platform
 *
 * @link https://www.innocraft.com
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

describe("InvalidateReports", function () {
    this.timeout(0);

    before(function () {
        testEnvironment.pluginsToLoad = ['InvalidateReports'];
        testEnvironment.save();
    });

    it('should load invalidate reports pages', function (done) {
        expect.screenshot('admin').to.be.captureSelector('#content', function (page) {
            page.load("?module=InvalidateReports&action=index&idSite=1&period=day&date=yesterday");
        }, done);
    });

    it('should show confirmation', function (done) {
        expect.screenshot('confirm').to.be.captureSelector('.modal.open', function (page) {
            page.click('[onconfirm="invalidate()"]');
        }, done);
    });

    it('should invalidate reports', function (done) {
        expect.screenshot('success').to.be.captureSelector('.notification-success', function (page) {
            page.evaluate(function(){
                $('.modal.open a:contains("Yes")').click();
            }, 1000);
            page.evaluate(function(){
                $('.notification-success>div').html($('.notification-success>div').html().replace(/, 2012\-01.*/,''));
            });
        }, done);
    });

    it('should select site', function (done) {
        expect.screenshot('select_site_and_segment').to.be.captureSelector('#content', function (page) {
            page.load("?module=InvalidateReports&action=index&idSite=1&period=day&date=yesterday");
            page.click('.site-selection .title', 1000);
            page.click('.custom_select_ul_list li:first-child a', 1000);
            page.evaluate(function(){
                $('[name="segment"] li:nth-child(3)')[0].click();
            }, 100);
        }, done);
    });

    it('should show confirmation with site and segment', function (done) {
        expect.screenshot('confirm_site_and_segment').to.be.captureSelector('.modal.open', function (page) {
            page.click('[onconfirm="invalidate()"]');
        }, done);
    });

});
