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
               // elem.css({color: 'red'});

var i=0;

              /*  ngModel.$parsers.unshift(function (viewValue) {

                   // if (ngModel.$isEmpty(viewValue)) {
                      //  ngModel.$setViewValue('0');
                      //  ngModel.$render()
                       // return '0eee';
                   // }
                   // else
                    i++
                    return '0'
                });

                ngModel.$formatters.unshift(
                    function (modelValue) {
                        if (ngModel.$isEmpty(modelValue)) {
                            // ngModel.$setValidity('float', true);
                            return '999';
                        }
                        else return modelValue.toUpperCase()
                    }
                );*/


                //ng-disabled="f.$error.validCharacters"
                ngModel.$validators.validCharacters = function(modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    return /[a-z]+/.test(value) ||  /[A-Z]+/.test(value)

                       // /\W+/.test(value); // /[0-9]+/.test(value)
                };
            }
        }
    })
