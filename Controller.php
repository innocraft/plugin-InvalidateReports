<?php
/**
 * InnoCraft - the company of the makers of Piwik Analytics, the free/libre analytics platform
 *
 * @link    https://www.innocraft.com
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\InvalidateReports;

use Piwik\API\Request;
use Piwik\Common;
use Piwik\Period\Range;
use Piwik\Piwik;
use Piwik\Site;
use Piwik\View;

/**
 *
 */
class Controller extends \Piwik\Plugin\ControllerAdmin
{
    public function index()
    {
        Piwik::checkUserHasSuperUserAccess();

        $view = new View('@InvalidateReports/admin');
        $this->setBasicVariablesView($view);

        $view->availableRanges   = $this->getAvailableRanges();

        return $view->render();
    }

    protected function getAvailableRanges()
    {
        return [
            0  => Piwik::translate('InvalidateReports_AllData'),
            24 => Piwik::translate('InvalidateReports_XMonths', 24),
            12 => Piwik::translate('InvalidateReports_XMonths', 12),
            6  => Piwik::translate('InvalidateReports_XMonths', 6),
            3  => Piwik::translate('InvalidateReports_XMonths', 3),
            1  => Piwik::translate('InvalidateReports_LastMonth', 1),
        ];
    }

    public function invalidateReports()
    {
        Piwik::checkUserHasSuperUserAccess();

        $siteIds = Common::getRequestVar('idSites', '', 'string');
        $segment = Common::getRequestVar('segment', '', 'string');
        $months  = Common::getRequestVar('months', '', 'string');
        $dates   = [];
        list($minDate, $maxDate) = Site::getMinMaxDateAcrossWebsites($siteIds);

        if ($months > 0) {
            $minDate = $maxDate->subMonth($months);
        }

        $range = new Range('day', $minDate->toString() . ',' . $maxDate->toString());

        foreach ($range->getSubperiods() as $subPeriod) {
            $dates[] = $subPeriod->getDateStart();
        }

        return Request::processRequest('CoreAdminHome.invalidateArchivedReports', [
            'format'  => 'json',
            'idSites' => $siteIds,
            'period'  => false,
            'dates'   => implode(',', $dates),
            'segment' => $segment
        ]);
    }
}
