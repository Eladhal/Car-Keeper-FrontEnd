import {Component, OnInit} from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
    styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit, DynamicComponentInterface {
    data: any;

    constructor() {
    }

    ngOnInit() {
    }

}
