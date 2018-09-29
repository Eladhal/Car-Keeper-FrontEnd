import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MfgRecommendation} from '../../Classes/MfgRecommendation';

@Injectable({
  providedIn: 'root'
})
export class HttpMfgRecommendationsService {

  constructor(private http: HttpClient) { }

    getMfgRecommendationsOfCar(carId: any): Observable<MfgRecommendation[]> {
        return this.http.get<MfgRecommendation[]>(`api/Manufacturer-recommendations/${carId}`);
    }
}
