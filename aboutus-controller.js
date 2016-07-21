/*
 *  Copyright (c) 2015-2016 G2i, Inc. All Rights Reserved.
 *  Proprietary and Confidential G2i, Inc.
 */
(function (angular) {

    'use strict';

    angular
        .module('g2i.aboutUs')
        .controller('g2i.aboutUs.aboutUsController', g2iAboutUsController);

    g2iAboutUsController.$inject = ['$scope', '$ionicConfig', '$translate', '$sce', 'g2i.services.miscellaneous.miscellaneousService', 'g2i.services.stateengine.stateEngineService'];

    function g2iAboutUsController($scope, $ionicConfigProvider, $translate, $sce, g2iMiscellaneous, g2iStateEngineService) {

        $ionicConfigProvider.views.swipeBackEnabled(false);
        $scope.backToDashboard = g2iStateEngineService.backToDashboard;
        $scope.aboutUsContent = {
            content: ""
        };
        // To display in IPad-ios 7
        $scope.contentvisible = 'padding: 10px;';

        /* Pass type to get about-US content
         Ex: 3 for about us */
        g2iMiscellaneous.getStaticService(3)
            .then(function (resp) {
                if (resp.status === 200) {
                    $scope.aboutUsContent.content = $sce.trustAsHtml(resp.data.value);
                } else {
                    $scope.aboutUsContent.content = $translate.instant("Messages.ContentUnavailable");
                }
            });
    }
}(window.angular));