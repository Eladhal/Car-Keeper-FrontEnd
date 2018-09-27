import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

    car: any;

    constructor() {
    }

    ngOnInit() {
    }

}
