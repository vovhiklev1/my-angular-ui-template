(function () {
    var cust = Object.create(Object.prototype);

    var defineProp = function (obj, key, value) {
        var config = {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(obj, key, config)
    };

    defineProp(cust, 'name', 'vova');
    defineProp(cust, 'getName', function () {
        return this.name
    });

    console.log(cust.getName());
})();
