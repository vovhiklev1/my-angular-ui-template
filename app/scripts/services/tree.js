(function () {
    'use strict';

    angular.module('app')
        .service('tree', treeService);

    treeService.$inject = ['$http'];
    function treeService($http) {
        var self = this;
        angular.extend(self, {
            getNodes: getNodes,
            getParent: getParent
        });

        function getParent() {
            return $http.post('./main.json').then(function (res) {
                return res.data;
            })
        }

        function getNodes(param) {
            return $http.post('./' + param + '.json').then(function (res) {
                return res.data;
            })
        }

    }
})();



