import {Component, OnInit} from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
    selector: 'app-car-card',
    templateUrl: './mini-car-card.component.html',
    styleUrls: ['./mini-car-card.component.css']
})
export class MiniCarCardComponent implements OnInit, DynamicComponentInterface {
    data: any;

    constructor() {
    }

    ngOnInit() {
    }

}
