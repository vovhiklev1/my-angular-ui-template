(function () {
    'use strict'

    angular.module('app').controller('date', dateController)
    function dateController($scope) {

        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.dateOptions = {
            //   dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.popup2 = {
            opened: false
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.getTimeStamp = function () {

            $scope.stamp = $scope.dt.getTime();
            //  var n = d.getTime();
            $scope.ex()
        }

        $scope.ex = function () {
            $scope.minDate = new Date().getTime();
            $scope.maxDate = new Date(2020, 5, 22).getTime();;

            var old = -62125326000000; //0001-04-30  -62125326000000
            var md =      10270800000; //1970-04-30
            var un =     104965200000;  //1973-04-30
            var cur =   1459371600000; //2016-03-31
            if ($scope.dt > old) {
                $scope.cl =true
            } else {
                $scope.cl =false
            }

        }
    }
})();