import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentFormComponent } from './get-student-form.component';

describe('GetStudentFormComponent', () => {
  let component: GetStudentFormComponent;
  let fixture: ComponentFixture<GetStudentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetStudentFormComponent]
    });
    fixture = TestBed.createComponent(GetStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
