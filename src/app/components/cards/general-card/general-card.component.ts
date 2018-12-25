import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';
import {CardHostDirective} from '../../../Directives/cardHostDirective/card-host.directive';
import {CardCompFactService} from '../../../services/cardCompFact/card-comp-fact.service';

@Component({
    selector: 'app-general-card',
    templateUrl: './general-card.component.html',
    styleUrls: ['./general-card.component.css']
})
export class GeneralCardComponent implements OnInit {

    @Input() data: any;
    @Input() ItemType: string;
    @ViewChild(CardHostDirective) appFormHost: CardHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private cardCompFactService: CardCompFactService) {
    }

    ngOnInit() {
        const comp = this.cardCompFactService.getCardComp(this.ItemType);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);

        const viewContainerRef = this.appFormHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
         (<DynamicComponentInterface>componentRef.instance).data = this.data;
    }

}
