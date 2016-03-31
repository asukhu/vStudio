System.register(['angular2/common', 'angular2/core', '../pipes/HeightPipe', '../directives/min', '../directives/max'], function(exports_1, context_1) {
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
    var common_1, core_1, HeightPipe_1, min_1, max_1;
    var ProfileComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (HeightPipe_1_1) {
                HeightPipe_1 = HeightPipe_1_1;
            },
            function (min_1_1) {
                min_1 = min_1_1;
            },
            function (max_1_1) {
                max_1 = max_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(userProfile, unitOfMeasureState, conversions) {
                    this.userProfile = userProfile;
                    this.unitOfMeasureState = unitOfMeasureState;
                    this.conversions = conversions;
                    // set up weight value
                    this._weightValue = unitOfMeasureState.usMeasure ? userProfile.weightPounds :
                        conversions.poundsToKilograms(userProfile.weightPounds);
                    this._wasMetric = unitOfMeasureState.metricMeasure;
                    // set up weight validations
                    var fb = new common_1.FormBuilder(), that = this;
                    this.myForm = fb.group({
                        weight: [this.weightValue, function (c) { return that.weightValidator(that, c); }]
                    });
                    // set up age
                    this._ageValue = userProfile.ageYears;
                }
                ProfileComponent.prototype.weightValidator = function (that, c) {
                    var weight;
                    if (c.value === null || isNaN(c.value)) {
                        return {
                            required: true
                        };
                    }
                    weight = Number(c.value);
                    if (isNaN(weight) || weight < that.minWeight || weight > that.maxWeight) {
                        return {
                            weightRange: true
                        };
                    }
                    return null;
                };
                Object.defineProperty(ProfileComponent.prototype, "uomLabel", {
                    get: function () {
                        return this.unitOfMeasureState.usMeasure ? "Imperial" : "Metric";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "genderLabel", {
                    get: function () {
                        return this.userProfile.isMale ? "Male" : "Female";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "minHeight", {
                    get: function () {
                        return this.unitOfMeasureState.usMeasure ? 24 : 60;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "maxHeight", {
                    get: function () {
                        return this.unitOfMeasureState.usMeasure ? 84 : 215;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "heightValue", {
                    get: function () {
                        return this.unitOfMeasureState.usMeasure ?
                            this.userProfile.heightInches :
                            this.conversions.inchesToCentimeters(this.userProfile.heightInches);
                    },
                    set: function (val) {
                        this.userProfile.heightInches = this.unitOfMeasureState.usMeasure ? val
                            : this.conversions.centimetersToInches(val);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "minWeight", {
                    get: function () {
                        return this.unitOfMeasureState.usMeasure ? 20 : 9;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "maxWeight", {
                    get: function () {
                        return this.unitOfMeasureState.usMeasure ? 400 : 182;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "weightUom", {
                    get: function () {
                        return this.unitOfMeasureState.usMeasure ? "lbs" : "kg";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "weightValue", {
                    get: function () {
                        if (this.unitOfMeasureState.metricMeasure !== this._wasMetric) {
                            this._wasMetric = this.unitOfMeasureState.metricMeasure;
                            if (this._wasMetric) {
                                this._weightValue = Math.round(this.conversions.poundsToKilograms(this._weightValue));
                            }
                            else {
                                this._weightValue = Math.round(this.conversions.kilogramsToPounds(this._weightValue));
                            }
                        }
                        return this._weightValue;
                    },
                    set: function (val) {
                        var incoming = Number(val), adjustedWeight = incoming;
                        this._weightValue = incoming;
                        if (this.unitOfMeasureState.metricMeasure) {
                            adjustedWeight = this.conversions.kilogramsToPounds(incoming);
                        }
                        if (adjustedWeight >= 20 && adjustedWeight <= 400) {
                            this.userProfile.weightPounds = adjustedWeight;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProfileComponent.prototype, "ageValue", {
                    get: function () {
                        return this._ageValue;
                    },
                    set: function (val) {
                        var incoming = Number(val);
                        this._ageValue = val;
                        if (incoming >= 13 && incoming <= 120) {
                            this.userProfile.ageYears = incoming;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ProfileComponent.prototype.toggleUom = function () {
                    this.unitOfMeasureState.toggle();
                };
                ProfileComponent.prototype.toggleGender = function () {
                    this.userProfile.toggleGender();
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'user-profile',
                        templateUrl: 'app/templates/userprofile.html',
                        directives: [common_1.FORM_DIRECTIVES, min_1.MinValidator, max_1.MaxValidator],
                        pipes: [HeightPipe_1.HeightPipe]
                    }),
                    __param(0, core_1.Inject("UserProfile")),
                    __param(1, core_1.Inject("UnitOfMeasureState")),
                    __param(2, core_1.Inject("Conversions")), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.js.map