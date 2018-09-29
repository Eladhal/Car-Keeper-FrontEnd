import {Component, OnInit} from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';
import {HttpCarService} from '../../../services/car/http-car.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-car-card',
    templateUrl: './car-card.component.html',
    styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit, DynamicComponentInterface {

    data: any;

    constructor(private httpCarService: HttpCarService, private router: Router) {
    }

    ngOnInit() {
    }

    btnEdit() {
        this.router.navigate([`Cars/${this.data.Id}/Update`]);
    }

    btnDelete() {
        this.httpCarService.deleteCar(this.data.id).subscribe(data => {
                console.log(data);
                this.router.navigate(['Cars']);
            },
            err => {
                this.httpCarService.handleError(err);
            }
        );

    }

}
