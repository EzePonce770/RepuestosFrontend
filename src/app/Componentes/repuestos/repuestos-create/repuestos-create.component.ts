import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDMarcaNavigation } from 'src/app/Interfaces/repuestos.interface';
import { RepuestosServiceService } from 'src/app/Services/repuestos-service.service';

@Component({
  selector: 'app-repuestos-create',
  templateUrl: './repuestos-create.component.html',
  styleUrls: ['./repuestos-create.component.scss']
})
export class RepuestosCreateComponent implements OnInit {

  repuestoForm!: FormGroup;
  displayModal: boolean = true;
  marcas: any[] = [];

  constructor(private fb: FormBuilder,private repuestosService: RepuestosServiceService) {}

  ngOnInit(): void {
    this.repuestoForm = this.fb.group({
      nombreRepuesto: ['', Validators.required],
      idMarca: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
    this.getMarcas()
  }

  agregarRepuesto() {
    if (this.repuestoForm.valid) {
      const nuevoRepuesto = this.repuestoForm.value;
      this.repuestosService.createRepuesto(nuevoRepuesto).subscribe(
        (response) => {
          console.log('Nuevo repuesto agregado:', response);
          
        },
        (error) => {
          console.error('Error al agregar el repuesto:', error);
          
        }
      );
      console.log('Nuevo repuesto agregado:', nuevoRepuesto);
    }
  }

  getMarcas(){
    this.repuestosService.getMarcas()
      .subscribe(
        (data) => {
          this.marcas = data.map((marca: any) => ({ label: marca.nombre, value: marca.idMarca }));
        },
        (error) => {
          console.error('Error al cargar marcas', error);
        }
      );
  }
  
  // GetSectorUsuario() {
  //   this.seguridadService.GetSectorUsuarios()
  //     .subscribe({
  //       next: (res: SectorUsuario[]) => {
  //         this.sectorUsuarioList = res;
  //       },
  //       error: (error: any) => {
  //       }
  //     });
  // }

}
