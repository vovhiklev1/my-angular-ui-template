(function () {
    'use strict'

    angular.module('app').directive('layout', layoutDirective);

    layoutDirective.$inject = [];

    function layoutDirective() {
        return {
            restrict: 'A',
            scope: {},
            templateUrl: './app/views/layout.html',
            controller: layoutController,
            controllerAs: 'layoutCtrl',
            bindToController: true
        }

        layoutController.$inject = ['$scope', 'productsData'];

        function layoutController($scope, productsData) {
            var layout = this;
            var products = {};
            var selectedRow = {};
            angular.extend(layout, {
                action: action,
                products: products,
                selectedRow: selectedRow,
                selectRow: selectRow
            });
            layout.products.header = {};
            layout.products.rows = {};

            function selectRow(row) {
                if (row)  layout.selectedRow = row;
            }

            function action() {
                productsData.loadData($scope.dataChoice).then(function (res) {
                    layout.products.objectData = res;
                    if (layout.products.objectData) {
                        layout.products.header = layout.products.objectData[0];
                        layout.products.rows = layout.products.objectData.slice(1);
                    }
                })

            };
        }


    }
})();