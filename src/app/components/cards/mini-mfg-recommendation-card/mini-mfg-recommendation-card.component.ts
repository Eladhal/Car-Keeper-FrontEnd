import { Component, OnInit } from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
  selector: 'app-mfg-recommendation-card',
  templateUrl: './mini-mfg-recommendation-card.component.html',
  styleUrls: ['./mini-mfg-recommendation-card.component.css']
})
export class MiniMfgRecommendationCardComponent implements OnInit, DynamicComponentInterface {
    data: any;


    constructor() { }

  ngOnInit() {
  }

}
