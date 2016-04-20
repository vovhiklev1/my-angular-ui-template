(function () {
    'use strict';

    angular
        .module('app', [
            'ui.router'/*,
            'ngMockE2E'*/
        ])
        .config(config);

    /// config.$inject = [ '$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: './views/main.html',
                controller: 'mainController as mainCtrl',
                resolve: {
                    parentNode: ['tree', function (tree) {
                        return tree.getParent().then(function (res) {
                            return res;
                        })
                    }]
                }
            })

    }

})();