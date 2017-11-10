<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
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
            'AssetManager.getJavaScriptFiles'  => 'getJsFiles',
            'AssetManager.getStylesheetFiles'  => 'getStylesheetFiles',
        );
    }

    /**
     * Adds required JS files
     * @param $jsFiles
     */
    public function getJsFiles(&$jsFiles)
    {
    }

    /**
     * Adds required CSS files
     * @param $stylesheets
     */
    public function getStylesheetFiles(&$stylesheets)
    {
        $stylesheets[] = "plugins/InvalidateReports/stylesheets/styles.less";
    }

}
