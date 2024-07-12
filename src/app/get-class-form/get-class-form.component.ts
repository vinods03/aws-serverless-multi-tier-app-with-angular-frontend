import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../mlforms/student-service.service';
import { StudentCalcModel } from '../models/student-calc-model';

@Component({
  selector: 'app-get-class-form',
  templateUrl: './get-class-form.component.html',
  styleUrls: ['./get-class-form.component.css']
})

export class GetClassFormComponent implements OnInit {

  getClassForm: FormGroup = new FormGroup({})

  classStudents: StudentCalcModel[] = []

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentServiceService
  ) {}

  ngOnInit(): void {

    this.getClassForm = this.formBuilder.group({
      "class": ['', Validators.required]
    })
    
  }

  onSubmit() {
    if (this.getClassForm.valid) {
      let clss: number = this.getClassForm.value['class']
      this.studentService.getClass(clss).subscribe((calcStudents) =>
        {this.classStudents = calcStudents}
      )
    }
  }

}
