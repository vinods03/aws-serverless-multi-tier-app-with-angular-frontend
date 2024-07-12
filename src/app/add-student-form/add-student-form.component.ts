import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../mlforms/student-service.service';
import { StudentModel } from '../models/student-model';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})

export class AddStudentFormComponent implements OnInit {

  addStudentForm: FormGroup = new FormGroup({})
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentServiceService
  ) {}

  ngOnInit(): void {
    this.addStudentForm = this.formBuilder.group({
      "student_id": ['', Validators.required],
      "class": ['', Validators.required],
      "test1_score": ['', Validators.required],
      "test2_score": ['', Validators.required],
      "test3_score": ['', Validators.required],
      "test4_score": ['', Validators.required],
      "test5_score": ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.addStudentForm.valid) {
      let student: StudentModel = this.addStudentForm.value
      this.studentService.addStudent(student).subscribe(() =>{
        alert('Student added !!')
      })

      this.addStudentForm.reset()

    }
  }

}

