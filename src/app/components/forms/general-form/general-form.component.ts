import {Component, OnInit, ViewChild, ComponentFactoryResolver, Input} from '@angular/core';
import {FormHostDirective} from '../../../Directives/formHostDirective/form-host.directive';
import {FormCompFactoryService} from '../../../services/formCompFact/form-comp-factory.service';
import {DynamicComponentInterface} from '../../../Classes/dynamicCompInterface';

@Component({
    selector: 'app-general-form',
    templateUrl: './general-form.component.html',
    styleUrls: ['./general-form.component.css']
})
export class GeneralFormComponent implements OnInit {

    @Input() data: any;
    @Input() formType: string;
    @ViewChild(FormHostDirective) appFormHost: FormHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private formFactService: FormCompFactoryService) {
    }

    ngOnInit() {
        const comp = this.formFactService.getFormComp(this.formType);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);

        const viewContainerRef = this.appFormHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(componentFactory);
        (<DynamicComponentInterface>componentRef.instance).data = this.data;
    }

}
