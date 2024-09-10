import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesServiceService } from 'src/app/Services/clientes-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  clienteForm!: FormGroup;

  constructor(private fb: FormBuilder,private clienteService: ClientesServiceService ) {

  }

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', [Validators.required]]
    });
  }

  agregarCliente() {
    if (this.clienteForm.valid) {
      const nuevoCliente = this.clienteForm.value;
      this.clienteService.createClientes(nuevoCliente).subscribe(
        (response) => {
          console.log('Nuevo cliente agregado:', response);
          
        },
        (error) => {
          console.error('Error al agregar el cliente:', error);
          
        }
      );
      console.log('Nuevo cliente agregado:', nuevoCliente);
    }
  }

}
