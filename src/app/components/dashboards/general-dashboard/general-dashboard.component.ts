import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {CardHostDirective} from '../../../Directives/cardHostDirective/card-host.directive';
import {Router} from '@angular/router';


@Component({
    selector: 'app-general-dashboard',
    templateUrl: './general-dashboard.component.html',
    styleUrls: ['./general-dashboard.component.css']
})
export class GeneralDashboardComponent implements OnInit {

    @Input() Items: any[];
    @Input() ItemType: string;
    @ViewChild(CardHostDirective) appFormHost: CardHostDirective;

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    addItem() {
        switch (this.ItemType) {
            case 'car':
                this.router.navigate(['Add-Car']);
                break;
            case 'carAction':
                this.router.navigate(['Add-Car-Action']);
                break;
            case 'mfgRecomandation':
                this.router.navigate(['Add-MFG-Recommendation']);
                break;
        }
    }

}
