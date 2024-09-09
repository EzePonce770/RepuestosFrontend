import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepuestosListComponent } from './repuestos-list/repuestos-list.component';
import { RepuestosEditComponent } from './repuestos-edit/repuestos-edit.component';
import { RepuestosCreateComponent } from './repuestos-create/repuestos-create.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
  
    RepuestosListComponent,
    RepuestosEditComponent,
    RepuestosCreateComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule

  ],  
  exports: [
    RepuestosListComponent,
    RepuestosEditComponent,
    RepuestosCreateComponent
  ]
})
export class RepuestosModule { }
