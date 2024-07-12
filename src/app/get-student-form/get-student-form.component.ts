import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../mlforms/student-service.service';
import { StudentCalcModel } from '../models/student-calc-model';

@Component({
  selector: 'app-get-student-form',
  templateUrl: './get-student-form.component.html',
  styleUrls: ['./get-student-form.component.css']
})

export class GetStudentFormComponent implements OnInit {

  getStudentForm: FormGroup = new FormGroup({})
  requestedStudent: StudentCalcModel = {"student_id":0, "class":0, "test1_score":0,"test2_score":0,"test3_score":0,"test4_score":0,"test5_score":0,"avg_score":0}

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentServiceService
  ) {}

  ngOnInit(): void {
    this.getStudentForm = this.formBuilder.group({
      "student_id": ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.getStudentForm.valid) {
      let student_id: number = this.getStudentForm.value['student_id']
      this.studentService.getStudent(student_id).subscribe((calcStudent) =>{
        this.requestedStudent = calcStudent
      })
    }
  }

  // onSubmit() {

  //   if (this.diamondAttrForm.valid) {
  //     let run_id: number = this.diamondAttrForm.value['run_id']
  //     this.diamondPriceService.getDiamond(run_id).subscribe((diamond) => {
  //      this.diamondEntry = diamond
  //     //  alert(this.diamondEntry.carat)
  //     })
           
  //   // this.diamondAttrForm.reset()

  //   }
  // }

}
