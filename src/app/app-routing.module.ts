import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaListComponent } from './Componentes/facturas/factura-list/factura-list.component';
import { FacturaCreateComponent } from './Componentes/facturas/factura-create/factura-create.component';
import { CreateComponent } from './Componentes/clientes/create/create.component';
import { ListComponent } from './Componentes/clientes/list/list.component';
import { EditComponent } from './Componentes/clientes/edit/edit.component';
import { RepuestosListComponent } from './Componentes/repuestos/repuestos-list/repuestos-list.component';

const routes: Routes = [
  { path: 'facturasList', component: FacturaListComponent },
  { path: 'facturasCreate', component: FacturaCreateComponent },
  { path: 'clientesCreate', component: CreateComponent },
  { path: 'clientesList', component: ListComponent },
  { path: 'clientesEdit', component: EditComponent },
  { path: 'repuestosList', component: RepuestosListComponent },

  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
