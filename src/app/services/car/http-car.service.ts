import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../../Classes/Car';


@Injectable({
    providedIn: 'root'
})
export class HttpCarService {

    constructor(private http: HttpClient) {
    }

    getCarsOfUser(userid: any): Observable<Car[]> {
        return this.http.get<Car[]>(`api/cars/${userid}`);
    }

    getCar(carId: any): Observable<Car> {
        return this.http.get<Car>(`api/car/${carId}`);
    }


    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
    }

    addCar(car: any) {
        return this.http.post<Car>('api/car', car);
    }

    deleteCar(Id: number): any {
        return this.http.delete(`api/car/${Id}`);
    }
}
