import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClassFormComponent } from './get-class-form.component';

describe('GetClassFormComponent', () => {
  let component: GetClassFormComponent;
  let fixture: ComponentFixture<GetClassFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetClassFormComponent]
    });
    fixture = TestBed.createComponent(GetClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
