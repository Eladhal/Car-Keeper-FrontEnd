import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiDataService {

    countries: string[];

    constructor() {
        fetch('https://restcountries.eu/rest/v2/all?fields=name')
            .then((resp) => resp.json())
            .then(data => {
                this.countries = data.map(c => c.name);
            });

    }
}
