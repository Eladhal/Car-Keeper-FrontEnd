import { Component } from '@angular/core';
import {CarAction} from '../../../Classes/CarAction';

@Component({
  selector: 'app-add-car-action',
  templateUrl: './add-car-action.component.html',
  styleUrls: ['./add-car-action.component.css']
})
export class AddCarActionComponent {

    carAction: CarAction = new CarAction();
    formType = 'carAction';

    constructor() {

    }

}
