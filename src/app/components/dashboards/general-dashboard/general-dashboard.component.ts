import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {CardHostDirective} from '../../../Directives/cardHostDirective/card-host.directive';
import {Router} from '@angular/router';
import {HttpCarService} from '../../../services/car/http-car.service';
import {HttpUserService} from '../../../services/user/http-user.service';


@Component({
    selector: 'app-general-dashboard',
    templateUrl: './general-dashboard.component.html',
    styleUrls: ['./general-dashboard.component.css']
})
export class GeneralDashboardComponent implements OnInit {

    Items: any[] = [];
    @Input() ItemType: string;
    @ViewChild(CardHostDirective) appFormHost: CardHostDirective;

    constructor(private router: Router, private httpCarService: HttpCarService,
                private httpUserService: HttpUserService) {
    }

    ngOnInit() {
        this.GetItems();
    }

    private GetItems() {
        switch (this.ItemType) {
            case 'miniCar':
                this.httpCarService.getCarsOfUser(this.httpUserService.userId).subscribe(cars => {
                    this.Items = cars;
                });
                break;
            case 'miniCarAction':
                break;
            case 'miniMfgRecomandation':
                break;
        }
    }

    addItem() {
        switch (this.ItemType) {
            case 'miniCar':
                this.router.navigate(['Add-Car']);
                break;
            case 'miniCarAction':
                this.router.navigate(['Add-Car-Action']);
                break;
            case 'miniMfgRecomandation':
                this.router.navigate(['Add-MFG-Recommendation']);
                break;
        }
    }


}
