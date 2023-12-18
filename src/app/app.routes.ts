import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [

    {

        path:'',component:HomeComponent
    },
    {
        path:'districts',component:DistrictsComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'signup',component:SignupComponent
    },
    {
        path:'districts/:id',component:SingleComponent
    },
];
