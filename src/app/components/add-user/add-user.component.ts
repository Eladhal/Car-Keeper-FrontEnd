import {Component, OnInit} from '@angular/core';
import {User} from '../../Classes/User';
import {genders} from '../../Arrays/Genders';
import {ApiDataService} from '../../services/Api/api-data.service';
import {HttpUserService} from '../../services/user/http-user.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

    user: User = new User();
    formType: string = 'user';
    // genders: string[] = genders;
    // countries: string[];

    constructor() {

    }


    // constructor(private mapService: ApiDataService, private httpUser: HttpUserService) {
    // }
    //
    // ngOnInit() {
    //     this.mapService.$countries.subscribe(data => {
    //         this.countries = data.map(rec => rec.name);
    //     });
    // }
    //
    // btnAddUser(user: User) {
    //     this.httpUser.addUser(user);
    // }

}
