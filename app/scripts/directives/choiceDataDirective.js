(function () {
    'use strict'

    angular.module('app').directive('choiceData', choiceDataDirective);

    choiceDataDirective.$inject = [];

    function choiceDataDirective() {
        return {
            restrict: 'A',
            scope: {},
            link: link,
            require: '^layout'
        }
        function link(scope, elem, attr, layout) {
            elem.bind('click', function (event) {
                if (layout) {
                    layout.action();
                }
            })
        }
    }
})();