import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [



    { path: "register", component: RegisterComponent },
    { path: "**", component: PageNotFoundComponent } 
];
