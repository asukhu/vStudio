System.register(["angular2/core", 'angular2/common', "./customValidators"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, customValidators_1;
    var MAX_VALIDATOR, MaxValidator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (customValidators_1_1) {
                customValidators_1 = customValidators_1_1;
            }],
        execute: function() {
            MAX_VALIDATOR = new core_1.Provider(common_1.NG_VALIDATORS, { useExisting: core_1.forwardRef(function () { return MaxValidator; }), multi: true });
            MaxValidator = (function () {
                function MaxValidator(max) {
                    this._validator = customValidators_1.HealthAppCustomValidators.max(this._max);
                }
                MaxValidator.prototype.validate = function (c) {
                    return this._validator(c);
                };
                MaxValidator = __decorate([
                    core_1.Directive({
                        selector: '[max][ngControl],[max][ngFormControl],[max][ngModel]',
                        providers: [MAX_VALIDATOR]
                    }),
                    __param(0, core_1.Attribute("max")), 
                    __metadata('design:paramtypes', [String])
                ], MaxValidator);
                return MaxValidator;
            }());
            exports_1("MaxValidator", MaxValidator);
        }
    }
});
//# sourceMappingURL=max.js.map