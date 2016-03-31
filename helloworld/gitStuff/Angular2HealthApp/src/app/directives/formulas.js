System.register(['angular2/core', '../pipes/BmiPipe', '../common/formulaBmr', '../common/formulaBmi', '../common/formulaThr'], function(exports_1, context_1) {
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
    var core_1, BmiPipe_1, formulaBmr_1, formulaBmi_1, formulaThr_1;
    var FormulaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BmiPipe_1_1) {
                BmiPipe_1 = BmiPipe_1_1;
            },
            function (formulaBmr_1_1) {
                formulaBmr_1 = formulaBmr_1_1;
            },
            function (formulaBmi_1_1) {
                formulaBmi_1 = formulaBmi_1_1;
            },
            function (formulaThr_1_1) {
                formulaThr_1 = formulaThr_1_1;
            }],
        execute: function() {
            FormulaComponent = (function () {
                function FormulaComponent(userProfile) {
                    this.userProfile = userProfile;
                }
                FormulaComponent.prototype.profileToParam = function () {
                    return {
                        isMale: this.userProfile.isMale,
                        weight: this.userProfile.weightPounds,
                        height: this.userProfile.heightInches,
                        age: this.userProfile.ageYears
                    };
                };
                Object.defineProperty(FormulaComponent.prototype, "bmr", {
                    get: function () {
                        return formulaBmr_1.formulaBmr(this.profileToParam());
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormulaComponent.prototype, "bmi", {
                    get: function () {
                        return formulaBmi_1.formulaBmi(this.profileToParam());
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormulaComponent.prototype, "thr", {
                    get: function () {
                        return formulaThr_1.formulaThr(this.userProfile.ageYears);
                    },
                    enumerable: true,
                    configurable: true
                });
                FormulaComponent = __decorate([
                    core_1.Component({
                        selector: 'formulas',
                        templateUrl: 'app/templates/formulas.html',
                        pipes: [BmiPipe_1.BmiPipe]
                    }),
                    __param(0, core_1.Inject("UserProfile")), 
                    __metadata('design:paramtypes', [Object])
                ], FormulaComponent);
                return FormulaComponent;
            }());
            exports_1("FormulaComponent", FormulaComponent);
        }
    }
});
//# sourceMappingURL=formulas.js.map