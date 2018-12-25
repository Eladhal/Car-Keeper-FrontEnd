import {Injectable} from '@angular/core';
import {User} from '../../Classes/User';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class HttpUserService {

    userId: any;

    constructor(private http: HttpClient) {
    }

    getUserByPassAndUserName(user: string, password: string): Observable<User> {
        let params: HttpParams = new HttpParams();
        params = params.append('user', user);
        params = params.append('password', password);
        return this.http.get<User>(`/api/user`, {params: params});
    }

    getUser(): Observable<User> {
        return this.http.get<User>(`/api/user/${this.userId}`);
    }

    getImage(): Observable<any> {
        return this.http.get<any>(`/api/user/${this.userId}/image`);
    }

    addUser(user: any): Observable<User> {
        return this.http.post<User>('/api/sign-up', user);
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
