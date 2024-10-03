import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFotterComponent } from './components/page-fotter/page-fotter.component';
import { PageSideNavComponent } from './components/page-side-nav/page-side-nav.component';
import { RouterLink } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFotterComponent,
    PageSideNavComponent,
    PageNotFoundComponent
  ],
  imports:[CommonModule,MaterialModule,RouterLink,ReactiveFormsModule],
  exports:[CommonModule,MaterialModule,PageHeaderComponent,PageFotterComponent,PageSideNavComponent,RouterLink,ReactiveFormsModule],
 
  
})
export class SharedModule { }
