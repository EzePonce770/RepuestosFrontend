import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Factura } from 'src/app/Interfaces/factura.interface';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.scss']
})
export class FacturaListComponent {

  facturaList: Factura[] = [];
  facturaSeleccionado:Factura={}as Factura;
  
}
