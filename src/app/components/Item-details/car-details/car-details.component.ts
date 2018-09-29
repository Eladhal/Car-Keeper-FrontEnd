import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpCarService} from '../../../services/car/http-car.service';
import {Car} from '../../../Classes/Car';

@Component({
    selector: 'app-car-details',
    templateUrl: './car-details.component.html',
    styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

    car: Car;
    ItemType = 'car';

    constructor(private route: ActivatedRoute, private httpCarService: HttpCarService) {
    }

    ngOnInit() {
        const Id = this.route.snapshot.paramMap.get('id');
        this.httpCarService.getCar(Id).subscribe(data => {
            this.car = data;
        });
    }

}
