import {Injectable} from '@angular/core';
import {UserFormComponent} from '../../components/forms/user-form/user-form.component';
import {CarFormComponent} from '../../components/forms/car-form/car-form.component';

@Injectable({
    providedIn: 'root'
})
export class FormCompFactoryService {

    constructor() {
    }

    getFormComp(name: string): any {

        switch (name) {
            case 'user':
                return UserFormComponent;
            case 'car':
                return CarFormComponent;
        }
    }
}
