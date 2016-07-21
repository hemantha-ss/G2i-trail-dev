/*
 *  Copyright (c) 2015-2016 G2i, Inc. All Rights Reserved.
 *  Proprietary and Confidential G2i, Inc.
 */
(function (angular) {

    'use strict';

    angular
        .module('g2i.aboutUs', [])
        .config(['$stateProvider', function ($stateProvider) {

            $stateProvider.state('aboutUs', {
                cache: false,
                url: '/aboutUs',
                templateUrl: 'app/aboutUs/aboutus.html',
                controller: 'g2i.aboutUs.aboutUsController'
            });

        }]);

}(window.angular));