import {Component} from '@angular/core';
import {ApiDataService} from './services/Api/api-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private api: ApiDataService) {
    }

    title = 'app';
}
