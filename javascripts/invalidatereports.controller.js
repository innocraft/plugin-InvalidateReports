/*!
 * InnoCraft - the company of the makers of Piwik Analytics, the free/libre analytics platform
 *
 * @link https://www.innocraft.com
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
(function () {
    angular.module('piwikApp').controller('InvalidateReportsController', InvalidateReportsController);

    InvalidateReportsController.$inject = ['$scope', 'piwikApi'];

    function InvalidateReportsController($scope, piwikApi) {

        $scope.loading = false;
        $scope.site = {
            id: 'all',
            name: ''
        };
        $scope.segment = '';

        $scope.invalidate = function () {
            $('#confirmInvalidation .website').html($scope.site.id == 'all' ? $scope.site.name : (_pk_translate('General_Website') + ' ' + $scope.site.name));
            $('#confirmInvalidation .segment').html($scope.segment ? (_pk_translate('General_Segment') + ' ' + $scope.segment) : _pk_translate('InvalidateReports_AllSegments'));
            piwikHelper.modalConfirm('#confirmInvalidation', {yes: invalidateReports});
        };

        function invalidateReports() {
            $scope.loading = true;

            piwikApi.withTokenInUrl();
            piwikApi.fetch({
                module: 'InvalidateReports',
                action: 'invalidateReports',
                idSites: $scope.site.id,
                segment: $scope.segment
            }).then(function (response) {

                var message = _pk_translate('InvalidateReports_InvalidationSuccess') + '<br />' +
                    _pk_translate('InvalidateReports_InvalidateAPIReturn') + '<br />' +
                    response;

                var UI = require('piwik/UI');
                var notification = new UI.Notification();
                notification.show(message, {id: 'InvalidatedReports', context: 'success'});
                notification.scrollToNotification();

                $scope.loading = false;
            }, function (errorMessage) {
                $scope.loading = false;
            });
        }
    }
})();