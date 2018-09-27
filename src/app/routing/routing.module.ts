import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from '../components/register/register.component';
import {SignInComponent} from '../components/sign-in/sign-in.component';
import {AppComponent} from '../app.component';
import {PageNotFoundComponent} from '../components/page-not-found-component/page-not-found-component.component';
import {MainDashBoardComponent} from '../components/dashboards/main-dash-board/main-dash-board.component';
import {AddCarComponent} from '../components/add-car/add-car.component';
import {AddCarActionComponent} from '../components/add-car-action/add-car-action.component';
import {AddMfgRecommendationComponent} from '../components/add-mfg-recommendation/add-mfg-recommendation.component';
import {CarDetailsComponent} from '../components/car-details/car-details.component';

const routes: Routes = [
    {path: 'Sign_In', component: SignInComponent},
    {path: 'Sign_Up', component: RegisterComponent},
    {path: 'Home', component: AppComponent},
    {path: 'Cars', component: MainDashBoardComponent},
    {path: 'Cars/:id', component: CarDetailsComponent},
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
