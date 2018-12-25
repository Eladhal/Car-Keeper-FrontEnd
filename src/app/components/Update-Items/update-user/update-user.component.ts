import { Component, OnInit } from '@angular/core';
import {User} from '../../../Classes/User';
import {HttpUserService} from '../../../services/user/http-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

    user: User;
    formType = 'user';

    constructor(private httpUserService: HttpUserService) {
    }

    ngOnInit() {
        this.httpUserService.getUser().subscribe(data => {
            this.user = data;
        });
    }

}
