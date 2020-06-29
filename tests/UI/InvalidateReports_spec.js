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

    it('should load invalidate reports pages', async function () {
        await page.goto("?module=InvalidateReports&action=index&idSite=1&period=day&date=yesterday");
        var elem = await page.$('#content');
        expect(await elem.screenshot()).to.matchImage('admin');
    });

    it('should show confirmation', async function () {
        await page.click('[onconfirm="invalidate()"]');
        await page.waitFor(500); // wait for animation
        var elem = await page.$('.modal.open');
        expect(await elem.screenshot()).to.matchImage('confirm');
    });

    it('should invalidate reports', async function () {
        var button = await page.jQuery('.modal.open .modal-footer a:contains(Yes)');
        await button.click();
        await page.waitForNetworkIdle();
        await page.evaluate(function(){
            $('.notification-success>div').html($('.notification-success>div').html().replace(/, 2012\-01.*/,''));
        });
        var elem = await page.$('.notification-success');
        expect(await elem.screenshot()).to.matchImage('success');
    });

    it('should select site', async function () {
        await page.goto("?module=InvalidateReports&action=index&idSite=1&period=day&date=yesterday");
        await page.click('.site-selection .title');
        await page.waitForNetworkIdle();
        await page.click('.custom_select_ul_list li:first-child a');
        await page.waitForNetworkIdle();
        await page.evaluate(function(){
            $('[name="segment"] li:nth-child(3)')[0].click();
        });
        var elem = await page.$('#content');
        expect(await elem.screenshot()).to.matchImage('select_site_and_segment');
    });

    it('should show confirmation with site and segment', async function () {
        await page.click('[onconfirm="invalidate()"]');
        await page.waitFor(500); // wait for animation
        var elem = await page.$('.modal.open');
        expect(await elem.screenshot()).to.matchImage('confirm_site_and_segment');
    });

});
