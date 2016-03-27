(function () {
    'use strict'

    angular.module('app').directive('productsForm', productsFormDirective);

    productsFormDirective.$inject = ['$compile'];

    function productsFormDirective($compile) {
        return {
            restrict: 'A',
            link: link,
            controller: productsController,
            controllerAs: 'productsCtrl',
            bindToController: true
        }
        function link(scope, elem, attr) {
            scope.productsCtrl.addLayout = function () {
                var template = ['<div class="row">',
                    '<div class="col-md-12">',
                    '<div layout></div>',
                    '</div></div>'].join('');
                var layout = angular.element(template);
                elem.append($compile(template)(scope))
            }
        }

        productsController.$inject = ['$scope', '$injector','$parse'];

        function productsController($scope, $injector, $parse) {
            var products = this;
            products.open = function () {
               // modalTool.actiom();
               // var modal = $parse('modalTool')($scope);
                var modal = $injector.get('modalTool');
                modal.action($scope);
             //   $parse('modal.action')($scope);

            };
        }
    }


})();