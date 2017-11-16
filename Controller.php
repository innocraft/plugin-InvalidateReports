<?php
/**
 * InnoCraft - the company of the makers of Piwik Analytics, the free/libre analytics platform
 *
 * @link https://www.innocraft.com
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

        $view->availableSegments = $this->getAvailableSegments();

        return $view->render();
    }

    protected function getAvailableSegments()
    {
        $availableSegments = ['' => Piwik::translate('InvalidateReports_AllSegments')];

        $segments = Request::processRequest('SegmentEditor.getAll');

        foreach ($segments as $segment) {
            $availableSegments[$segment['definition']] = Common::unsanitizeInputValue($segment['name']) . ' (' . $segment['definition'] . ')';
        }

        return $availableSegments;
    }

    public function invalidateReports()
    {
        Piwik::checkUserHasSuperUserAccess();

        $siteIds = Common::getRequestVar('idSites', '', 'string');
        $segment = Common::getRequestVar('segment', '', 'string');
        $dates = [];
        list($minDate, $maxDate) = Site::getMinMaxDateAcrossWebsites($siteIds);

        $range = new Range('day', $minDate->toString().','.$maxDate->toString());

        foreach ($range->getSubperiods() as $subPeriod) {
            $dates[] = $subPeriod->getDateStart();
        }

        return Request::processRequest('CoreAdminHome.invalidateArchivedReports', [
                'format' => 'json',
                'idSites' => $siteIds,
                'dates' =>  implode(',',$dates),
                'segment' => $segment
        ]);
    }
}