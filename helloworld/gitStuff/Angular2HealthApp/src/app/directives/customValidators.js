System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HealthAppCustomValidators;
    return {
        setters:[],
        execute: function() {
            HealthAppCustomValidators = (function () {
                function HealthAppCustomValidators() {
                }
                HealthAppCustomValidators.min = function (min) {
                    return function (control) {
                        var v = Number(control.value);
                        return v < min || isNaN(v) ?
                            { "min": { "requiredMin": min, "actualMin": v } } :
                            null;
                    };
                };
                HealthAppCustomValidators.max = function (max) {
                    return function (control) {
                        var v = Number(control.value);
                        return v > max || isNaN(v) ?
                            { "max": { "requiredMax": max, "actualMax": v } } :
                            null;
                    };
                };
                return HealthAppCustomValidators;
            }());
            exports_1("HealthAppCustomValidators", HealthAppCustomValidators);
        }
    }
});
//# sourceMappingURL=customValidators.js.map