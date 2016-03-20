(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/home');

        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'AuthController',
                templateUrl: 'ekasud/core/views/login.html'
            })
            .state('desktop', {
                url: '/desktop',
                templateUrl: 'ekasud/core/views/desktop.html',
                controller: 'DesktopController as desktopCtrl',
                resolve: {
                    desktopConfig: ['desktop', function (desktop) {
                        return desktop.init();
                    }]
                }
            })
    }

})();