import { Component } from '@angular/core';
import { Repuesto } from 'src/app/Interfaces/repuestos.interface';
import { RepuestosServiceService } from 'src/app/Services/repuestos-service.service';

@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrls: ['./repuestos-list.component.scss']
})
export class RepuestosListComponent {
  
  clienteList:Repuesto[] = [];
  cliente:Repuesto={}as Repuesto;

  constructor(private repuestosService:RepuestosServiceService) {

  }

  ngOnInit(): void {
    this.GetClientes();
  }

  GetClientes() {
    this.repuestosService.getAllClientes()
      .subscribe({
        next: (res: Repuesto[]) => {
          this.clienteList = res;
          console.log(this.clienteList)
        },
        error: (error: any) => {
        }
      });
  }

}
