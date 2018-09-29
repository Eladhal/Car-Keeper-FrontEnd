import {Component, OnInit} from '@angular/core';
import {CarAction} from '../../../Classes/CarAction';
import {ActivatedRoute} from '@angular/router';
import {HttpCarActionService} from '../../../services/carAction/http-car-action.service';

@Component({
    selector: 'app-actions-dashboard',
    templateUrl: './actions-dashboard.component.html',
    styleUrls: ['./actions-dashboard.component.css']
})
export class ActionsDashboardComponent implements OnInit {

    actions: CarAction[];
    ItemType = 'miniCarAction';

    constructor(private route: ActivatedRoute, private httpCarActionsService: HttpCarActionService) {
    }

    ngOnInit() {
        const Id = this.route.snapshot.paramMap.get('id');
        this.httpCarActionsService.getActionsOfCar(Id).subscribe(data => {
            this.actions = data;
        });
    }

}
