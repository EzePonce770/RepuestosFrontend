import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepuestosListComponent } from './repuestos-list/repuestos-list.component';
import { RepuestosCreateComponent } from './repuestos-create/repuestos-create.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
  
    RepuestosListComponent,
    RepuestosCreateComponent
    
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule

  ],  
  exports: [
    RepuestosListComponent,
    RepuestosCreateComponent
  ]
})
export class RepuestosModule { }
