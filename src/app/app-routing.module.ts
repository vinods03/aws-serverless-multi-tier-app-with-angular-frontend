import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { GetStudentFormComponent } from './get-student-form/get-student-form.component';
import { GetClassFormComponent } from './get-class-form/get-class-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "options", component: OptionsComponent},
  {path: "add-student-details", component: AddStudentFormComponent},
  {path: "get-student-details", component: GetStudentFormComponent},
  {path: "get-class-details", component: GetClassFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
