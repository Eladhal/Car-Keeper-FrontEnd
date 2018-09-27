import {Component} from '@angular/core';
import {User} from '../../Classes/User';

@Component({
    selector: 'app-add-user',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    user: User = new User();
    formType = 'user';

    constructor() {

    }
}
