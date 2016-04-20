(function () {
    'use strict';

    angular.module('app')
        .run(run);

    run.$inject = [];
    function run($httpBackend) {
        var phones = [{name: 'phone1'}, {name: 'phone2'}];

        //  $httpBackend.whenGET('/phones').respond(phones);


        $httpBackend.whenPOST('/phones').respond(function (method, url, data) {
            var phone = angular.fromJson(data);
            phones.push(phone);
            return [200, phone, {}];
        });

        $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templare are handled by the real server
        //...
    }

})();

