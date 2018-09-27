import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MfgRecomendationsComponent} from './components/mfg-recomendations/mfg-recomendations.component';
import {AddCarComponent} from './components/add-car/add-car.component';
import {AddCarActionComponent} from './components/add-car-action/add-car-action.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {RoutingModule} from './routing/routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserCardComponent} from './components/dashboards/user-card/user-card.component';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found-component.component';
import {CarDetailsComponent} from './car-details/car-details.component';
import {GeneralFormComponent} from './components/forms/general-form/general-form.component';
import {UserFormComponent} from './components/forms/user-form/user-form.component';
import {FormHostDirective} from './Directives/formHostDirective/form-host.directive';
import {CarFormComponent} from './components/forms/car-form/car-form.component';
import { GeneralDashboardComponent } from './components/dashboards/general-dashboard/general-dashboard.component';
import { CardHostDirective } from './Directives/cardHostDirective/card-host.directive';


@NgModule({
    declarations: [
        AppComponent,
        MfgRecomendationsComponent,
        AddCarComponent,
        AddCarActionComponent,
        AddUserComponent,
        NavBarComponent,
        SignInComponent,
        UserCardComponent,
        PageNotFoundComponent,
        CarDetailsComponent,
        GeneralFormComponent,
        UserFormComponent,
        FormHostDirective,
        CarFormComponent,
        GeneralDashboardComponent,
        CardHostDirective
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        UserFormComponent,
        CarFormComponent
    ]
})
export class AppModule {
}
