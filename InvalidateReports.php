<?php

/**
 * InnoCraft - the company of the makers of Piwik Analytics, the free/libre analytics platform
 *
 * @link https://www.innocraft.com
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\InvalidateReports;

/**
 *
 */
class InvalidateReports extends \Piwik\Plugin
{
    /**
     * @see Piwik_Plugin::registerEvents
     */
    public function registerEvents()
    {
        return array(
            'AssetManager.getStylesheetFiles' => 'getStylesheetFiles',
            'Translate.getClientSideTranslationKeys' => 'getClientSideTranslationKeys'
        );
    }

    /**
     * Adds required CSS files
     * @param $stylesheets
     */
    public function getStylesheetFiles(&$stylesheets)
    {
        $stylesheets[] = "plugins/InvalidateReports/stylesheets/styles.less";
    }

    /**
     * Adds translation keys required in JS
     * @param $translationKeys
     */
    public function getClientSideTranslationKeys(&$translationKeys)
    {
        $translationKeys[] = "InvalidateReports_AllWebsites";
        $translationKeys[] = "InvalidateReports_AllSegments";
        $translationKeys[] = "InvalidateReports_InvalidationSuccess";
        $translationKeys[] = "InvalidateReports_InvalidateAPIReturn";
        $translationKeys[] = 'InvalidateReports_ConfirmInvalidation';
        $translationKeys[] = 'InvalidateReports_ChooseWebsite';
        $translationKeys[] = 'InvalidateReports_ChooseSegment';
        $translationKeys[] = 'InvalidateReports_ChooseRange';
        $translationKeys[] = 'InvalidateReports_InvalidateReports';
        $translationKeys[] = 'General_Segment';
        $translationKeys[] = 'General_Website';
        $translationKeys[] = 'InvalidateReports_InvalidateHistoricalReports';
        $translationKeys[] = 'InvalidateReports_PageDescription';
        $translationKeys[] = 'InvalidateReports_ExamplesCustomReports';
        $translationKeys[] = 'InvalidateReports_ExamplesFunnels';
        $translationKeys[] = 'InvalidateReports_ExamplesRawData';
    }
}
