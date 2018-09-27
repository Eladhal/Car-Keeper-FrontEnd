import { Component, OnInit } from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
  selector: 'app-mfg-recommendation-card',
  templateUrl: './mfg-recommendation-card.component.html',
  styleUrls: ['./mfg-recommendation-card.component.css']
})
export class MfgRecommendationCardComponent implements OnInit, DynamicComponentInterface {
    data: any;


    constructor() { }

  ngOnInit() {
  }

}
