import {Component, OnInit} from '@angular/core';
import {Car} from '../../../Classes/Car';
import {HttpCarService} from '../../../services/car/http-car.service';

@Component({
    selector: 'app-main-dash-board',
    templateUrl: './main-dash-board.component.html',
    styleUrls: ['./main-dash-board.component.css']
})
export class MainDashBoardComponent implements OnInit {

    cars: Car[];
    ItemType = 'car';
    userId: any;

    constructor(private httpCarService: HttpCarService) {
    }

    ngOnInit() {
        this.httpCarService.getCarsOfUser(this.userId).subscribe(data =>
            this.cars = data
        );
    }
}
