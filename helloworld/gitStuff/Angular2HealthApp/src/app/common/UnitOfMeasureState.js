System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UnitOfMeasureState;
    return {
        setters:[],
        execute: function() {
            exports_1("UnitOfMeasureState", UnitOfMeasureState = (function () {
                var usMeasure = true, metricMeasure = false;
                function Constructor() {
                }
                Constructor.prototype.toggle = function () {
                    this.usMeasure = !this.usMeasure;
                };
                Object.defineProperty(Constructor.prototype, "usMeasure", {
                    enumerable: true,
                    configurable: false,
                    get: function () {
                        return usMeasure;
                    },
                    set: function (val) {
                        usMeasure = !!val;
                        metricMeasure = !usMeasure;
                    }
                });
                Object.defineProperty(Constructor.prototype, "metricMeasure", {
                    enumerable: true,
                    configurable: false,
                    get: function () {
                        return metricMeasure;
                    },
                    set: function (val) {
                        metricMeasure = !!val;
                        usMeasure = !metricMeasure;
                    }
                });
                return Constructor;
            })());
        }
    }
});
//# sourceMappingURL=UnitOfMeasureState.js.map