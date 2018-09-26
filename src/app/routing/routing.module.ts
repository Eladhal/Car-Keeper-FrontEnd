import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from '../components/add-user/add-user.component';
import {SignInComponent} from '../sign-in/sign-in.component';
import {AppComponent} from '../app.component';
import {UserDashboardComponent} from '../components/user-dashboard/user-dashboard.component';
import {PageNotFoundComponent} from '../components/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
    {path: 'Sign_In', component: SignInComponent},
    {path: 'Sign_Up', component: AddUserComponent},
    {path: 'Home', component: AppComponent},
    {path: 'Cars', component: UserDashboardComponent},
    {path: 'Cars/:id', component: UserDashboardComponent},
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
