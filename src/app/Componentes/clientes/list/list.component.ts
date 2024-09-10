import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  selectedCliente: Cliente | null = null;
  displayModal: boolean = false;
  repuestoForm: FormGroup;
  clienteSeleccionadoId: number = 0;
  displayDeleteModal: boolean = false;

  constructor(private clientesService:ClientesServiceService, private fb: FormBuilder) {

    this.repuestoForm = this.fb.group({
      idRepuestos: [null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required]

    });

  }

  ngOnInit(): void {
    this.GetClientes();
  }

  abrirModalEditar(repuesto: Cliente) {
    this.displayModal = true;
    this.repuestoForm.patchValue(repuesto);
  }

  abrirModalEliminar(id: number) {
    this.clienteSeleccionadoId = id;
    this.displayDeleteModal = true;
  }

  guardarRepuesto() {
    console.log(this.repuestoForm.value);
    this.cerrarModal();
  }

  cerrarModal() {
    this.displayModal = false;
  }

  eliminarRepuesto() {
    console.log('Repuesto eliminado con ID:', this.clienteSeleccionadoId);
    this.serviceDeleteCliente(this.clienteSeleccionadoId)
    this.cerrarModalEliminar();
  }

  cerrarModalEliminar() {
    this.displayDeleteModal = false;
  }

  serviceDeleteCliente(idRepuesto:number){
    this.clientesService.DeleteCliente(idRepuesto)
    .subscribe({
            next: () => {
              this.GetClientes();
            },
            error: (error: any) => {
            }
          });
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
