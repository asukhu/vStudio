System.register(['angular2/platform/browser', 'angular2/core', './common/UserProfile', './common/UnitOfMeasureState', './common/Conversions', './directives/profile', './directives/formulas', './directives/customValidators'], function(exports_1, context_1) {
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
    var browser_1, core_1, UserProfile_1, UnitOfMeasureState_1, Conversions_1, profile_1, formulas_1, customValidators_1;
    var userProfileFactory, uomStateFactory, conversionsFactory, AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserProfile_1_1) {
                UserProfile_1 = UserProfile_1_1;
            },
            function (UnitOfMeasureState_1_1) {
                UnitOfMeasureState_1 = UnitOfMeasureState_1_1;
            },
            function (Conversions_1_1) {
                Conversions_1 = Conversions_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (formulas_1_1) {
                formulas_1 = formulas_1_1;
            },
            function (customValidators_1_1) {
                customValidators_1 = customValidators_1_1;
            }],
        execute: function() {
            userProfileFactory = function () { return (new UserProfile_1.UserProfile()); };
            uomStateFactory = function () { return (new UnitOfMeasureState_1.UnitOfMeasureState()); };
            conversionsFactory = function () { return (new Conversions_1.Conversions()); };
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app.html',
                        directives: [profile_1.ProfileComponent, formulas_1.FormulaComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            browser_1.bootstrap(AppComponent, [core_1.provide("UserProfile", { useFactory: userProfileFactory }),
                core_1.provide("UnitOfMeasureState", { useFactory: uomStateFactory }),
                core_1.provide("Conversions", { useFactory: conversionsFactory }),
                core_1.provide(customValidators_1.HealthAppCustomValidators, { useClass: customValidators_1.HealthAppCustomValidators })]);
        }
    }
});
//# sourceMappingURL=app.js.map