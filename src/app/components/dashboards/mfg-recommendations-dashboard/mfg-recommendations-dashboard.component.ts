import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MfgRecommendation} from '../../../Classes/MfgRecommendation';
import {HttpMfgRecommendationsService} from '../../../services/mfgRecomondations/http-mfg-recommendations.service';

@Component({
  selector: 'app-mfg-recommendations-dashboard',
  templateUrl: './mfg-recommendations-dashboard.component.html',
  styleUrls: ['./mfg-recommendations-dashboard.component.css']
})
export class MfgRecommendationsDashboardComponent implements OnInit {

    mfgRecommendations: MfgRecommendation[];
    ItemType = 'miniMfgRecomandation';

    constructor(private route: ActivatedRoute, private httpMfgRecomondationsService: HttpMfgRecommendationsService) {
    }

    ngOnInit() {
        const Id = this.route.snapshot.paramMap.get('id');
        this.httpMfgRecomondationsService.getMfgRecommendationsOfCar(Id).subscribe(data => {
            this.mfgRecommendations = data;
        });
    }

}
