(function () {
    'use strict'

    angular.module('app').service('productsData', productsDataService);

    productsDataService.$inject = ['$http', '$timeout'];

    function productsDataService($http, $timeout) {
        var vm = this;
        angular.extend(vm, {
            loadData: loadData
        });

        function loadData(objName) {
            if (objName) {
                return $http.get('./app/' + objName + '.json').then(function (res) {
                    return res.data;
                }, function (err) {
                    console.log('Error load products...')
                })
            }
        }
    }
})();