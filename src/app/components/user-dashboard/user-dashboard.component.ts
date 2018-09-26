import {Component, OnInit} from '@angular/core';
import {Car} from '../../Classes/Car';
import {HttpCarService} from '../../services/car/http-car.service';


@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

    cars: Car[];
    userId: any;

    constructor(private httpCar: HttpCarService) {
    }

    ngOnInit() {
        this.httpCar.getCarsOfUser(this.userId).subscribe(data => {
                this.cars = data;
            },
            err => {
                this.httpCar.handleError(err);
            }
        );

    }

}
