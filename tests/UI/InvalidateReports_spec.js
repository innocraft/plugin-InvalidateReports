/*!
 * Piwik - free/libre analytics platform
 *
 * Screenshot tests for ReferrersManager plugin
 *
 * @link http://piwik.org
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
});
