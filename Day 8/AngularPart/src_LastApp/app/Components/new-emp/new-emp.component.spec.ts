import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmpComponent } from './new-emp.component';

describe('NewEmpComponent', () => {
  let component: NewEmpComponent;
  let fixture: ComponentFixture<NewEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
