import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookStoreComponent } from './books/book-store/book-store.component';
import { MaintenanceComponent } from './books/maintenance/maintenance.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProfileComponent } from './users/profile/profile.component';
import { UserOrdersComponent } from './users/user-orders/user-orders.component';

export const routes: Routes = [

    {path:"login",component:LoginComponent},

    { path: "register", component: RegisterComponent },
    {path:"home",component:BookStoreComponent},
    {path:"my-orders",component:UserOrdersComponent},
    {path:"maintenance",component:MaintenanceComponent},
    {path:"profile",component:ProfileComponent},
    { path: "**", component: PageNotFoundComponent } 
];
