import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentFormComponent } from '../add-student-form/add-student-form.component';
import { GetStudentFormComponent } from '../get-student-form/get-student-form.component';
import { GetClassFormComponent } from '../get-class-form/get-class-form.component';
import { HomeModule } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddStudentFormComponent,
    GetStudentFormComponent,
    GetClassFormComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class MlformsModule { }
