System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HeightPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeightPipe = (function () {
                function HeightPipe(unitOfMeasureState, conversions) {
                    this.unitOfMeasureState = unitOfMeasureState;
                    this.conversions = conversions;
                }
                HeightPipe.prototype.transform = function (value, args) {
                    var heightInches = Number(value), heightCentimeters, m, ft, result = '', convert = !!args[0];
                    if (this.unitOfMeasureState.usMeasure) {
                        ft = Math.floor(this.conversions.inchesToFeet(heightInches));
                        if (ft > 0) {
                            result = ft + " ft. ";
                        }
                        heightInches -= ft * 12;
                        if (heightInches >= 1) {
                            result += (Math.floor(heightInches) + ' in.');
                        }
                    }
                    else {
                        if (convert !== undefined && !!convert === convert && !convert) {
                            heightCentimeters = heightInches;
                        }
                        else {
                            heightCentimeters = this.conversions.inchesToCentimeters(heightInches);
                        }
                        result = Math.round(heightCentimeters) + ' cm.';
                    }
                    return result;
                };
                HeightPipe = __decorate([
                    core_1.Pipe({
                        name: 'height'
                    }),
                    __param(0, core_1.Inject("UnitOfMeasureState")),
                    __param(1, core_1.Inject("Conversions")), 
                    __metadata('design:paramtypes', [Object, Object])
                ], HeightPipe);
                return HeightPipe;
            }());
            exports_1("HeightPipe", HeightPipe);
        }
    }
});
//# sourceMappingURL=HeightPipe.js.map