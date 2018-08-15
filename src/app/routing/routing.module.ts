import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from '../components/add-user/add-user.component';
import {SignInComponent} from '../sign-in/sign-in.component';

const routes: Routes = [
    {path: 'Sign_In', component: SignInComponent},
    {path: 'Sign_Up', component: AddUserComponent}
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
