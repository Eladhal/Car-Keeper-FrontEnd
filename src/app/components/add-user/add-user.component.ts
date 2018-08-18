import { Component, OnInit } from '@angular/core';
import {User} from '../../Classes/User';
import {genders} from '../../Arrays/Genders';
import {ApiDataService} from '../../services/Api/api-data.service';
import {HttpUserService} from '../../services/user/http-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  genders: string[] = genders;
  countries: string[];
  constructor(private mapService: ApiDataService , private httpUser: HttpUserService) { }

  ngOnInit() {
    this.countries = this.mapService.countries;
  }

    btnAddUser(user: User) {
        this.httpUser.addUser(user);
    }

}
