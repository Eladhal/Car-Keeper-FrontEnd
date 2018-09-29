import { Component } from '@angular/core';
import {MfgRecommendation} from '../../../Classes/MfgRecommendation';

@Component({
  selector: 'app-add-mfg-recommendation',
  templateUrl: './add-mfg-recommendation.component.html',
  styleUrls: ['./add-mfg-recommendation.component.css']
})
export class AddMfgRecommendationComponent  {

    mfgRecommendation: MfgRecommendation = new MfgRecommendation();
    formType = 'mfgRecomandation';

    constructor() {

    }

}
