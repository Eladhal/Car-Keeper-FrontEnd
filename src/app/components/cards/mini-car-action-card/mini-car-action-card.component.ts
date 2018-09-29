import { Component, OnInit } from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
  selector: 'app-car-action-card',
  templateUrl: './mini-car-action-card.component.html',
  styleUrls: ['./mini-car-action-card.component.css']
})
export class MiniCarActionCardComponent implements OnInit, DynamicComponentInterface {
    data: any;


    constructor() { }

  ngOnInit() {
  }

}
