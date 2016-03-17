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
            scope:true,
            link: function (scope, elem, attr, ngModel) {
                elem.css({color: 'red'});


                /*
                 ngModel.$parsers.unshift(function (viewValue) {

                 if (ngModel.$isEmpty(viewValue)) {
                 ngModel.$setViewValue('0');
                 ngModel.$render()
                 return '0';
                 } else return viewValue
                 });*/


                ngModel.$parsers.unshift(function (viewValue) {

                    if (ngModel.$isEmpty(viewValue)) {
                        // ngModel.$setValidity('float', true);
                        ngModel.$setValidity("isEmptyField" + attr.name, true);
                        return viewValue;
                    } else {
                        ngModel.$setValidity("isEmptyField" + attr.name, false);
                        return viewValue
                    }
                });


                ngModel.$formatters.unshift(
                    function (modelValue) {
                        if (ngModel.$isEmpty(modelValue)) {
                            // ngModel.$setValidity('float', true);
                            ngModel.$setValidity("isEmptyField" + attr.name, true);
                            return modelValue;
                        } else {
                            ngModel.$setValidity("isEmptyField" + attr.name, false);
                            return modelValue
                        }
                    }
                );
            }
        }
    }).directive('isolateForm', [function () {
        return {
            restrict: 'A',
            require: '?form',
            link: function (scope, elm, attrs, ctrl) {
                if (!ctrl) {
                    return;
                }

                // Do a copy of the controller
                var ctrlCopy = {};
                angular.copy(ctrl, ctrlCopy);

                // Get the parent of the form
                var parent = elm.parent().controller('form');
                // Remove parent link to the controller
                parent.$removeControl(ctrl);

                // Replace form controller with a "isolated form"
              /*  var isolatedFormCtrl = {
                    $setValidity: function (validationToken, isValid, control) {
                        ctrlCopy.$setValidity(validationToken, isValid, control);
                        parent.$setValidity(validationToken, true, ctrl);
                    },
                    $setDirty: function () {
                        elm.removeClass('ng-pristine').addClass('ng-dirty');
                        ctrl.$dirty = true;
                        ctrl.$pristine = false;
                    },
                };
                angular.extend(ctrl, isolatedFormCtrl);*/
            }
        };
    }]);
