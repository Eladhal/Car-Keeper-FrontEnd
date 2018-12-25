import {Component, OnInit, Input} from '@angular/core';
import {genders} from '../../../Arrays/Genders';
import {HttpUserService} from '../../../services/user/http-user.service';
import {User} from '../../../Classes/User';
import {ApiDataService} from '../../../services/Api/api-data.service';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, DynamicComponentInterface {

    @Input() data: any;
    genders: string[] = genders;
    countries: string[];
    cloneData: User;


    constructor(private mapService: ApiDataService, private httpUser: HttpUserService,
                private router: Router) {
    }

    ngOnInit() {
        this.mapService.$countries.subscribe(data => {
            this.countries = data.map(rec => rec.name);
            this.cloneDataForClear();
        });
    }

    // btnAddUser(user: User) {
    btnAddUser() {

        const uploadData = new FormData();
        uploadData.append('firstName', this.data.firstName);
        uploadData.append('lastName', this.data.lastName);
        uploadData.append('username', this.data.userName);
        uploadData.append('password', this.data.password);
        uploadData.append('dateOfBirth', this.data.dateOfBirth);
        uploadData.append('gender', this.data.gender);
        uploadData.append('phone', this.data.phoneNumber);
        uploadData.append('email', this.data.email);
        uploadData.append('country', this.data.country);
        uploadData.append('city', this.data.city);
        uploadData.append('street', this.data.street);
        uploadData.append('myFile', this.data.file, 'userImage');

        this.httpUser.addUser(uploadData).subscribe(data => {
            console.log(data);
                this.httpUser.userId = data._id;
                this.router.navigate(['/Cars']);
            },
            err => {
                this.httpUser.handleError(err);
            }
        );
    }

    onFileSelected(event) {
        this.data.file = event.target.files[0];
    }

    clear() {
        this.data.userName = this.cloneData.userName;
        this.data.password = this.cloneData.password;
        this.data.firstName = this.cloneData.firstName;
        this.data.dateOfBirth = this.cloneData.dateOfBirth;
        this.data.gender = this.cloneData.gender;
        this.data.phoneNumber = this.cloneData.phoneNumber;
        this.data.email = this.cloneData.email;
        this.data.registrationDate = this.cloneData.registrationDate;
        this.data.userName = this.cloneData.userName;
        this.data.street = this.cloneData.street;
        this.data.city = this.cloneData.city;
        this.data.country = this.cloneData.country;
    }

    cancel() {
        // TBD
    }

    cloneDataForClear() {
        this.cloneData = new User();
        this.cloneData.userName = this.data.userName;
        this.cloneData.password = this.data.password;
        this.cloneData.firstName = this.data.firstName;
        this.cloneData.dateOfBirth = this.data.dateOfBirth;
        this.cloneData.gender = this.data.gender;
        this.cloneData.phoneNumber = this.data.phoneNumber;
        this.cloneData.email = this.data.email;
        this.cloneData.registrationDate = this.data.registrationDate;
        this.cloneData.userName = this.data.userName;
        this.cloneData.street = this.data.street;
        this.cloneData.city = this.data.city;
        this.cloneData.country = this.data.country;
    }

}
