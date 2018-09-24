import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../Classes/User';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiDataService {

    $countries: Observable<any>;

    constructor(private http: HttpClient) {
        this.$countries = this.http.get('https://restcountries.eu/rest/v2/all?fields=name');
    }

//     fetch(
//
//     'https://restcountries.eu/rest/v2/all?fields=name';
// )
// .
//
//     then(
//
// (
//     resp;
// ) =>
//     resp;
// .
//
//     json()
//
// )
// .
//
//     then(data
//
// => {
//     this;
// .
//     countries = data.map(c => c.name);
// }
//
// )
// ;
// }
}
