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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        MfgRecomendationsComponent,
        AddCarComponent,
        AddCarActionComponent,
        AddUserComponent,
        NavBarComponent,
        SignInComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
