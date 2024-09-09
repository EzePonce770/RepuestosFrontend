import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaCreateComponent } from './factura-create.component';

describe('FacturaCreateComponent', () => {
  let component: FacturaCreateComponent;
  let fixture: ComponentFixture<FacturaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
