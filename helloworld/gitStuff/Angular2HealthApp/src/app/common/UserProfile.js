System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserProfile;
    return {
        setters:[],
        execute: function() {
            exports_1("UserProfile", UserProfile = (function () {
                var isMale = true, isFemale = false;
                function Constructor() {
                    this.heightInches = 60;
                    this.weightPounds = 130;
                    this.ageYears = 40;
                }
                Constructor.prototype.toggleGender = function () {
                    this.isMale = !this.isMale;
                };
                Object.defineProperty(Constructor.prototype, "isMale", {
                    enumerable: true,
                    configurable: false,
                    get: function () {
                        return isMale;
                    },
                    set: function (val) {
                        isMale = !!val;
                        isFemale = !isMale;
                    }
                });
                Object.defineProperty(Constructor.prototype, "isFemale", {
                    enumerable: true,
                    configurable: false,
                    get: function () {
                        return isFemale;
                    },
                    set: function (val) {
                        isFemale = !!val;
                        isMale = !isFemale;
                    }
                });
                return Constructor;
            })());
        }
    }
});
//# sourceMappingURL=UserProfile.js.map