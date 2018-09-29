import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {AddCarComponent} from './components/Add-Items/add-car/add-car.component';
import {AddCarActionComponent} from './components/Add-Items/add-car-action/add-car-action.component';
import {RegisterComponent} from './components/register/register.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {RoutingModule} from './routing/routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found-component.component';
import {CarDetailsComponent} from './components/Item-details/car-details/car-details.component';
import {GeneralFormComponent} from './components/forms/general-form/general-form.component';
import {UserFormComponent} from './components/forms/user-form/user-form.component';
import {FormHostDirective} from './Directives/formHostDirective/form-host.directive';
import {CarFormComponent} from './components/forms/car-form/car-form.component';
import { GeneralDashboardComponent } from './components/dashboards/general-dashboard/general-dashboard.component';
import { CardHostDirective } from './Directives/cardHostDirective/card-host.directive';
import { MiniCarCardComponent } from './components/cards/mini-car-card/mini-car-card.component';
import { MiniCarActionCardComponent } from './components/cards/mini-car-action-card/mini-car-action-card.component';
import { MiniMfgRecommendationCardComponent } from './components/cards/mini-mfg-recommendation-card/mini-mfg-recommendation-card.component';
import { GeneralCardComponent } from './components/cards/general-card/general-card.component';
import { CarActionFormComponent } from './components/forms/car-action-form/car-action-form.component';
import { MainDashBoardComponent } from './components/dashboards/main-dash-board/main-dash-board.component';
import { AddMfgRecommendationComponent } from './components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component';
import { UserCardComponent } from './components/cards/user-card/user-card.component';
import { CarCardComponent } from './components/cards/car-card/car-card.component';
import { CarActionCardComponent } from './components/cards/car-action-card/car-action-card.component';
import { MfgRecommendationCardComponent } from './components/cards/mfg-recommendation-card/mfg-recommendation-card.component';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { UpdateCarComponent } from './components/Update-Items/update-car/update-car.component';
import { UpdateUserComponent } from './components/Update-Items/update-user/update-user.component';
import { UpdateCarActionComponent } from './components/Update-Items/update-car-action/update-car-action.component';
import {HomeComponent} from './components/home/home.component';
import { ActionsDashboardComponent } from './components/dashboards/actions-dashboard/actions-dashboard.component';
import { MfgRecommendationsDashboardComponent } from './components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        AddCarComponent,
        AddCarActionComponent,
        RegisterComponent,
        NavBarComponent,
        SignInComponent,
        PageNotFoundComponent,
        CarDetailsComponent,
        GeneralFormComponent,
        UserFormComponent,
        FormHostDirective,
        CarFormComponent,
        GeneralDashboardComponent,
        CardHostDirective,
        MiniCarCardComponent,
        MiniCarActionCardComponent,
        MiniMfgRecommendationCardComponent,
        GeneralCardComponent,
        CarActionFormComponent,
        MainDashBoardComponent,
        AddMfgRecommendationComponent,
        UserCardComponent,
        CarCardComponent,
        CarActionCardComponent,
        MfgRecommendationCardComponent,
        AddOnsComponent,
        UpdateCarComponent,
        UpdateUserComponent,
        UpdateCarActionComponent,
        HomeComponent,
        ActionsDashboardComponent,
        MfgRecommendationsDashboardComponent
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
        CarFormComponent,
        MiniCarCardComponent,
        MiniCarActionCardComponent,
        MiniMfgRecommendationCardComponent,
    ]
})
export class AppModule {
}
