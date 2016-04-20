(function () {
    'use strict';

    angular.module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', '$state', 'parentNode'];

    function mainController($scope, $state, parentNode) {
        var ctrl = this;
        angular.extend(ctrl, {
            parentNode: parentNode
        })

    }

})();