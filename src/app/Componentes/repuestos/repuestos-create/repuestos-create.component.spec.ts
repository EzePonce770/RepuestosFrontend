import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosCreateComponent } from './repuestos-create.component';

describe('RepuestosCreateComponent', () => {
  let component: RepuestosCreateComponent;
  let fixture: ComponentFixture<RepuestosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestosCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepuestosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
