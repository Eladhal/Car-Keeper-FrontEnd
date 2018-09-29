import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from '../components/register/register.component';
import {SignInComponent} from '../components/sign-in/sign-in.component';
import {AppComponent} from '../components/app/app.component';
import {PageNotFoundComponent} from '../components/page-not-found-component/page-not-found-component.component';
import {MainDashBoardComponent} from '../components/dashboards/main-dash-board/main-dash-board.component';
import {AddCarComponent} from '../components/Add-Items/add-car/add-car.component';
import {AddCarActionComponent} from '../components/Add-Items/add-car-action/add-car-action.component';
import {AddMfgRecommendationComponent} from '../components/Add-Items/add-mfg-recommendation/add-mfg-recommendation.component';
import {CarDetailsComponent} from '../components/Item-details/car-details/car-details.component';
import {AddOnsComponent} from '../components/add-ons/add-ons.component';
import {UpdateCarComponent} from '../components/Update-Items/update-car/update-car.component';
import {HomeComponent} from '../components/home/home.component';
import {ActionsDashboardComponent} from '../components/dashboards/actions-dashboard/actions-dashboard.component';
import {MfgRecommendationsDashboardComponent} from '../components/dashboards/mfg-recommendations-dashboard/mfg-recommendations-dashboard.component';

const routes: Routes = [
    {path: 'Sign_In', component: SignInComponent},
    {path: 'Sign_Up', component: RegisterComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'Cars/:id/Actions', component: ActionsDashboardComponent},
    {path: 'Cars/:id/Manufacturer-recommendations', component: MfgRecommendationsDashboardComponent},
    {path: 'Cars/:id/Update', component: UpdateCarComponent},
    {path: 'Cars/:id/AddOns', component: AddOnsComponent},
    {path: 'Cars/:id', component: CarDetailsComponent},
    {path: 'Cars', component: MainDashBoardComponent},
    {path: 'Add-Car', component: AddCarComponent},
    {path: 'Add-Car-Action', component: AddCarActionComponent},
    {path: 'Add-MFG-Recommendation', component: AddMfgRecommendationComponent},
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)

    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {
}
