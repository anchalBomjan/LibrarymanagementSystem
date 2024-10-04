
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module'; // Import the MaterialModule

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule, // Include MaterialModule here

  //  ReactiveFormsModule, // Add ReactiveFormsModule here already added in  sharemodule
  
    MatCardModule  // Add MatCardModule here
  ],
})
export class AuthModule {}
