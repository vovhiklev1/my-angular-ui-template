(function () {
    'use strict'

    angular.module('app').directive('productsForm', productsFormDirective);

    productsFormDirective.$inject = ['$compile'];

    function productsFormDirective($compile) {
        return {
            restrict: 'A',
            link: link
        }
        function link(scope, elem, attr) {
            scope.addLayout = function () {
                var template = ['<div class="row">',
                    '<div class="col-md-12">',
                    '<div layout></div>',
                    '</div></div>'].join('');
                var layout = angular.element(template);
                elem.append($compile(template)(scope))
            }
        }
    }
})();