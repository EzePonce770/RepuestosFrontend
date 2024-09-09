import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/Interfaces/cliente.interface';
import { ClientesServiceService } from 'src/app/Services/clientes-service.service';
declare var bootstrap: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  clienteList:Cliente[] = [];
  cliente:Cliente={}as Cliente;

  constructor(private clientesService:ClientesServiceService) {

  }

  ngOnInit(): void {
    this.GetClientes();
  }

  GetClientes() {
    this.clientesService.getAllClientes()
      .subscribe({
        next: (res: Cliente[]) => {
          this.clienteList = res;
          console.log(this.clienteList)
        },
        error: (error: any) => {
        }
      });
  }
}
