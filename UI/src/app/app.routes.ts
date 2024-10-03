import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [

    {path:"login",component:LoginComponent},

    { path: "register", component: RegisterComponent },
    { path: "**", component: PageNotFoundComponent } 
];
