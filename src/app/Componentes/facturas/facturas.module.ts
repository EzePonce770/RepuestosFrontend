import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';
import { TableModule } from 'primeng/table';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FacturaListComponent,
    FacturaCreateComponent,
    
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    FacturaListComponent,
    FacturaCreateComponent
  ]
})
export class FacturasModule { }
