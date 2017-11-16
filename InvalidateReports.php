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
     * @see Piwik_Plugin::getListHooksRegistered
     */
    public function getListHooksRegistered()
    {
        return array(
            'AssetManager.getJavaScriptFiles' => 'getJsFiles',
            'AssetManager.getStylesheetFiles' => 'getStylesheetFiles',
            'Translate.getClientSideTranslationKeys' => 'getClientSideTranslationKeys'
        );
    }

    /**
     * Adds required JS files
     * @param $jsFiles
     */
    public function getJsFiles(&$jsFiles)
    {
        $jsFiles[] = "plugins/InvalidateReports/javascripts/invalidatereports.controller.js";
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
        $translationKeys[] = "InvalidateReports_AllSegments";
        $translationKeys[] = "InvalidateReports_InvalidationSuccess";
        $translationKeys[] = "InvalidateReports_InvalidateAPIReturn";
    }
}