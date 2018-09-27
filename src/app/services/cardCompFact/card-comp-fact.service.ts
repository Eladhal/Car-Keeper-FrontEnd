import { Injectable } from '@angular/core';
import {CarCardComponent} from '../../components/cards/car-card/car-card.component';
import {CarActionCardComponent} from '../../components/cards/car-action-card/car-action-card.component';
import {MfgRecommendationCardComponent} from '../../components/cards/mfg-recommendation-card/mfg-recommendation-card.component';

@Injectable({
  providedIn: 'root'
})
export class CardCompFactService {

  constructor() { }

    getCardComp(name: string): any {

        switch (name) {
            case 'car':
                return CarCardComponent;
            case 'carAction':
                return CarActionCardComponent;
            case 'mfgRecomandation':
                return MfgRecommendationCardComponent;
        }
    }
}
