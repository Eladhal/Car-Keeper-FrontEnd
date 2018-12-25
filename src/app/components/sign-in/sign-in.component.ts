import {Component, OnInit} from '@angular/core';
import {HttpUserService} from '../../services/user/http-user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    constructor(private httpUserService: HttpUserService, private router: Router) {
    }

    ngOnInit() {
    }

    btnLogin(data: any) {
        this.httpUserService.getUserByPassAndUserName(data.username, data.password).subscribe(user => {
            this.httpUserService.userId = user._id;
            this.router.navigate(['/Cars']);
        });
    }

}
