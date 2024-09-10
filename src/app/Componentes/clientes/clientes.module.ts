import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,

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
    ListComponent,
    CreateComponent
  ]
  
})
export class ClientesModule { }
