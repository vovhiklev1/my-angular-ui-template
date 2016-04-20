(function () {
    'use strict';

    angular.module('app').directive('treeNode', treeNodeDirective);

    treeNodeDirective.$inject = ['tree'];
    function treeNodeDirective(tree) {
        return {
            restrict: 'AEC',
            scope: {
                treeNode: '=treeNode'
            },
            template: '<ul>' +
            '<li ng-repeat="node in treeNode">' +
            '<a ng-click="get(node)">{{node.name}}</a>' +
            '<div tree-node="node.nodes"></div>' +
            '</li>' +
            '</ul>',
            link: link
        };

        function link(scope, elem, attr) {
            scope.get = function (node) {
                tree.getNodes(node.id).then(function (res) {
                    node.nodes = res;
                })
            }
        }
    }
})();