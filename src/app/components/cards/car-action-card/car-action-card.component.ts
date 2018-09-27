import { Component, OnInit } from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
  selector: 'app-car-action-card',
  templateUrl: './car-action-card.component.html',
  styleUrls: ['./car-action-card.component.css']
})
export class CarActionCardComponent implements OnInit, DynamicComponentInterface {
    data: any;


    constructor() { }

  ngOnInit() {
  }

}
