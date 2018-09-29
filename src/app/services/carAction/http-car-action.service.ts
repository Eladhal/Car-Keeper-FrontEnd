import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarAction} from '../../Classes/CarAction';

@Injectable({
  providedIn: 'root'
})
export class HttpCarActionService {

  constructor(private http: HttpClient) { }

    getActionsOfCar(carId: any): Observable<CarAction[]> {
        return this.http.get<CarAction[]>(`api/car-actions/${carId}`);
    }
}
