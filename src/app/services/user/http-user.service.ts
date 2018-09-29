import {Injectable} from '@angular/core';
import {User} from '../../Classes/User';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpUserService {

    userId: any;

    constructor(private http: HttpClient) {
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>('api/sign-up', user);
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

}
