import { Injectable } from '@angular/core';
import {MiniCarCardComponent} from '../../components/cards/mini-car-card/mini-car-card.component';
import {MiniCarActionCardComponent} from '../../components/cards/mini-car-action-card/mini-car-action-card.component';
import {MiniMfgRecommendationCardComponent} from '../../components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component';
import {CarCardComponent} from '../../components/cards/car-card/car-card.component';

@Injectable({
  providedIn: 'root'
})
export class CardCompFactService {

  constructor() { }

    getCardComp(name: string): any {

        switch (name) {
            case 'car':
                return CarCardComponent;
            case 'miniCar':
                return MiniCarCardComponent;
            case 'miniCarAction':
                return MiniCarActionCardComponent;
            case 'miniMfgRecomandation':
                return MiniMfgRecommendationCardComponent;
        }
    }
}
