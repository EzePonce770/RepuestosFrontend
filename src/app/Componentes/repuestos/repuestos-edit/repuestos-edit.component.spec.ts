import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosEditComponent } from './repuestos-edit.component';

describe('RepuestosEditComponent', () => {
  let component: RepuestosEditComponent;
  let fixture: ComponentFixture<RepuestosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepuestosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
