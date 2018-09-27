import {Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';
import {CardHostDirective} from '../../../Directives/cardHostDirective/card-host.directive';

@Component({
    selector: 'app-general-dashboard',
    templateUrl: './general-dashboard.component.html',
    styleUrls: ['./general-dashboard.component.css']
})
export class GeneralDashboardComponent implements OnInit {

    @Input() items: any[];
    @Input() itemType: string;
    @ViewChild(CardHostDirective) appFormHost: CardHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        // this.httpCar.getCarsOfUser(this.userId).subscribe(data => {
        //         this.cars = data;
        //     },
        //     err => {
        //         this.httpCar.handleError(err);
        //     }
        // );

    }

}
