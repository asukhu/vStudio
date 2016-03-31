import {Component} from 'angular2/core';
import {Courses} from './app.component.Courses';

@Component({
    selector: 'my-app2',
    template: '<h1>My First Angular 2 App</h1><courses>vvv</courses>',
    directives : [Courses]
})
export class AppComponent { }