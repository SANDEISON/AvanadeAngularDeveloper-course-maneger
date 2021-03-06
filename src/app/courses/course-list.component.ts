import { Component, OnInit} from '@angular/core';
import {Course} from './course'

@Component({
    //templateUrl: './course-list.component.html'
    selector: 'app-course-list',
    templateUrl : './course-list.component.html'

})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void { 
        this.courses = [
            
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                realiaseDate: 'MARÇO, 2, 2021',

            },
            {
                id: 2,
                name: 'Angular: HTPP',
                imageUrl: '',
                price: 45.99,
                code: 'lkl-1094',
                duration: 80,
                rating: 5.4,
                realiaseDate: 'MARÇO, 2, 2021',

            }

        ]
                 
    }

}