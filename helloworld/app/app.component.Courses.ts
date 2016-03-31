
import {Component} from 'angular2/core';

interface ICourse{
    name: string;
    instructor: string;
}

@Component({
    selector: "courses",
    templateUrl : "courses.html"
})
export class Courses{
    courses: ICourse[];
    selectedCourse: ICourse;
    
    constructor(){
        this.courses=[{
            name: "Angular 1.x",
            instructor: "anu"
        },{
            name: "Angular2",
            instructor: "Amar"
        }, {
            name: "Univeral join",
            instructor: "Anu & Amar"
        }];
        this.selectedCourse = this.courses[0];
    }
    
    onClick(course: ICourse): void{
        this.selectedCourse = course;
    }
    onEnter(value: string): void{
        window.alert(value);
    }
}