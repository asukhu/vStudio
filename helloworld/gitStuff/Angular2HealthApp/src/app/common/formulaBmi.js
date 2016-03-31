System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function formulaBmi(profile) {
        // BMI = (weight in pound * 703) / (height in inches)^2
        var bmi = (profile.weight * 703) / (profile.height * profile.height);
        // round it
        return Math.round(bmi * 10.0) / 10.0;
    }
    return {
        setters:[],
        execute: function() {
            exports_1("formulaBmi", formulaBmi);
        }
    }
});
//# sourceMappingURL=formulaBmi.js.map