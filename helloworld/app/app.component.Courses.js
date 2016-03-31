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
    var core_1;
    var Courses;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Courses = (function () {
                function Courses() {
                    this.courses = [{
                            name: "Angular 1.x",
                            instructor: "anu"
                        }, {
                            name: "Angular2",
                            instructor: "Amar"
                        }, {
                            name: "Univeral join",
                            instructor: "Anu & Amar"
                        }];
                    this.selectedCourse = this.courses[0];
                }
                Courses.prototype.onClick = function (course) {
                    this.selectedCourse = course;
                };
                Courses.prototype.onEnter = function (value) {
                    window.alert(value);
                };
                Courses = __decorate([
                    core_1.Component({
                        selector: "courses",
                        templateUrl: "courses.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Courses);
                return Courses;
            }());
            exports_1("Courses", Courses);
        }
    }
});
//# sourceMappingURL=app.component.Courses.js.map