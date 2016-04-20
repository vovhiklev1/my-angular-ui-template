(function () {
    'use strict';

    angular
        .module('app',['ui.router'])
        .config(config);

   /// config.$inject = [ '$stateProvider', '$urlRouterProvider'];

    function config( $stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', 'main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'mainController as main'
            })

    }

})();