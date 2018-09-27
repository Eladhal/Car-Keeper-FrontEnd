import {Component, OnInit, Input} from '@angular/core';
import {genders} from '../../../Arrays/Genders';
import {HttpUserService} from '../../../services/user/http-user.service';
import {User} from '../../../Classes/User';
import {ApiDataService} from '../../../services/Api/api-data.service';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, DynamicComponentInterface {

    @Input() data: any;
    genders: string[] = genders;
    countries: string[];


    constructor(private mapService: ApiDataService, private httpUser: HttpUserService) {
    }

    ngOnInit() {
        this.mapService.$countries.subscribe(data => {
            this.countries = data.map(rec => rec.name);
        });
    }

    btnAddUser(user: User) {
        this.httpUser.addUser(user);
    }

}
