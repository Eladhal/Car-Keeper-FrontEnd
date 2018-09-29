import {Component, Input, OnInit} from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';
import {Router} from '@angular/router';
import {ApiDataService} from '../../../services/Api/api-data.service';
import {colors} from '../../../Arrays/Colors';
import {Car} from '../../../Classes/Car';
import {HttpCarService} from '../../../services/car/http-car.service';
import {category} from '../../../Arrays/Category';

@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
    styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit, DynamicComponentInterface {

    @Input() data: any;
    colors: string[] = colors;
    categories: string[] = category;

    constructor(private mapService: ApiDataService, private httpCar: HttpCarService,
                private router: Router) {
    }

    ngOnInit() {

    }

    btnAddCar(car: Car) {
        this.httpCar.addCar(car).subscribe(data => {
                console.log(data);
                this.router.navigate(['/Cars']);
            },
            err => {
                this.httpCar.handleError(err);
            }
        );
    }

}
