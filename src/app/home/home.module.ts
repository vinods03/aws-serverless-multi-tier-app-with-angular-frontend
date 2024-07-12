import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OptionsComponent } from '../options/options.component';




@NgModule({
  declarations: [
    HomeComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ], 
  exports: [
    HomeComponent,
    OptionsComponent
  ]
})

export class HomeModule { }
