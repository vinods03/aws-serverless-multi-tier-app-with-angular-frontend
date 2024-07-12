import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentModel } from '../models/student-model';
import { Observable } from 'rxjs';
import { StudentCalcModel } from '../models/student-calc-model';

@Injectable({
  providedIn: 'root'
})

export class StudentServiceService {

  private apiPostUrl = "https://kx6pevrd30.execute-api.us-east-1.amazonaws.com/prod/"
  // private apiGetStudentUrl= "https://kx6pevrd30.execute-api.us-east-1.amazonaws.com/prod/{student_id}"
  private apiGetUrl= "https://kx6pevrd30.execute-api.us-east-1.amazonaws.com/prod/"
  // private apiGetClassUrl = "https://kx6pevrd30.execute-api.us-east-1.amazonaws.com/prod/class/{class}"
  private apiGetClassUrl = "https://kx6pevrd30.execute-api.us-east-1.amazonaws.com/prod/class/"
  
  constructor(private http: HttpClient) { }

  addStudent(student: StudentModel): Observable<void> {
    return this.http.post<void>(this.apiPostUrl, student)
  }

  getStudent(student_id: number): Observable<StudentCalcModel> {
    return this.http.get<StudentCalcModel>(this.apiGetUrl+student_id)
  }

  getClass(class_id: number): Observable<StudentCalcModel[]> {
    return this.http.get<StudentCalcModel[]>(this.apiGetClassUrl+class_id)
  }


}
