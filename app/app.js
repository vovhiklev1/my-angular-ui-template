'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router'
]).
    config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('view1');
        $stateProvider.state('view1', {
            url: '/view1',
            templateUrl: 'view1/view1.html',
            controller: function ($scope) {
                  //  $scope.mod =  5;
            }
        }).state('view2', {
            url: '/view2',
            templateUrl: 'view2/view2.html'
        });
    }]).directive('uiDir', function ($filter) {
        return {
            require: 'ngModel',
            link: function (scope, elem, attr, ngModel) {
                elem.css({color: 'red'});



                ngModel.$parsers.unshift(function (viewValue) {

                    if (ngModel.$isEmpty(viewValue)) {
                        ngModel.$setViewValue('0');
                        ngModel.$render()
                        return '0';
                    } else return viewValue
                });

                ngModel.$formatters.unshift(
                    function (modelValue) {
                        if (ngModel.$isEmpty(modelValue)) {
                            // ngModel.$setValidity('float', true);
                            return '0';
                        } else return modelValue
                    }
                );
            }
        }
    })
