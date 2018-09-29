import {Component} from '@angular/core';
import {Car} from '../../../Classes/Car';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

    car: Car = new Car();
    formType = 'car';

    constructor() {

    }

}
