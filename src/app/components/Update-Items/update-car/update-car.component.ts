import {Component, OnInit} from '@angular/core';
import {Car} from '../../../Classes/Car';
import {ActivatedRoute} from '@angular/router';
import {HttpCarService} from '../../../services/car/http-car.service';

@Component({
    selector: 'app-update-car',
    templateUrl: './update-car.component.html',
    styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

    car: Car;
    formType = 'car';

    constructor(private route: ActivatedRoute, private httpCarService: HttpCarService) {
    }

    ngOnInit() {
        const Id = this.route.snapshot.paramMap.get('id');
        this.httpCarService.getCar(Id).subscribe(data => {
            this.car = data;
        });
    }
}
