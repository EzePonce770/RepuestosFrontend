import { IDMarcaNavigation, Repuesto } from './../../../Interfaces/repuestos.interface';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepuestosServiceService } from 'src/app/Services/repuestos-service.service';

@Component({
  selector: 'app-repuestos-list',
  templateUrl: './repuestos-list.component.html',
  styleUrls: ['./repuestos-list.component.scss']
})
export class RepuestosListComponent {

  repuestoList: Repuesto[] = [];
  selectedRepuesto: Repuesto | null = null;
  marcas: IDMarcaNavigation[] = [];
  displayModal: boolean = false;
  displayDeleteModal: boolean = false;
  repuestoForm: FormGroup;
  repuestoSeleccionadoId: number = 0;

  displayEditModal: boolean = false;

  constructor(private repuestosService:RepuestosServiceService, private fb: FormBuilder) {

    this.repuestoForm = this.fb.group({
      idRepuestos: [null],
      nombreRepuesto: ['', Validators.required],
      precio: [0, Validators.required],
      idMarca: [null, Validators.required]

    });
  }


  ngOnInit(): void {
    this.GetRepuestos();
  }

  GetRepuestos() {
    this.repuestosService.getAllRepuestos()
      .subscribe({
        next: (res: Repuesto[]) => {
          this.repuestoList = res;
        },
        error: (error: any) => {
        }
      });
  }

  openEditModal(repuesto: Repuesto) {
    this.selectedRepuesto = repuesto;
    this.displayEditModal = true;

    this.repuestoForm.patchValue(repuesto);
  }

  onSubmit() {
    if (this.repuestoForm.valid) {
      const updatedRepuesto = this.repuestoForm.value;
      console.log('Repuesto actualizado:', updatedRepuesto);

      this.displayEditModal = false;
    }
  }

  abrirModalEditar(repuesto: Repuesto) {
    this.displayModal = true;
    this.repuestoForm.patchValue(repuesto);
  }

  cerrarModal() {
    this.displayModal = false;
  }

  guardarRepuesto() {
    console.log(this.repuestoForm.value);
    this.cerrarModal();
  }

  abrirModalEliminar(id: number) {
    this.repuestoSeleccionadoId = id;
    this.displayDeleteModal = true;
  }

  cerrarModalEliminar() {
    this.displayDeleteModal = false;
  }


  eliminarRepuesto() {
    console.log('Repuesto eliminado con ID:', this.repuestoSeleccionadoId);
    this.serviceDeleteRepuesto(this.repuestoSeleccionadoId)
    this.cerrarModalEliminar();
  }

  serviceDeleteRepuesto(idRepuesto:number){
    this.repuestosService.DeleteRepuesto(idRepuesto)
    .subscribe({
            next: () => {
              this.GetRepuestos();
            },
            error: (error: any) => {
            }
          });
  }
}
