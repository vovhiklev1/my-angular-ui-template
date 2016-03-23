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
                /*
                Пример валидатора, проверяющего параметры пароля — не менее 6 символов, как минимум, 1 цифра и, как минимум, один нецифровой символ (демо):
    mod.directive('strongPassRequired', function () {
        var isValid = function(s) {
            return s && s.length > 5 && /\D/.test(s) && /\d/.test(s);
        };

        return {
            require:'ngModel',
            link:function (scope, elm, attrs, ngModelCtrl) {

                ngModelCtrl.$parsers.unshift(function (viewValue) {
                    ngModelCtrl.$setValidity('strongPass', isValid(viewValue));
                    return viewValue;
                });

                ngModelCtrl.$formatters.unshift(function (modelValue) {
                    ngModelCtrl.$setValidity('strongPass', isValid(modelValue));
                    return modelValue;
                });
            }
        };
    });
                */
                
            }
        }
    })
