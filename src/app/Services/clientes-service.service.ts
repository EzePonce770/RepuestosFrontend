import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Cliente } from '../Interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  constructor(private api: ApiService) { }

  createClientes(cliente: Cliente): Observable<Cliente>{
    return this.api.post('Clientes/Create',cliente)
  }

  DeleteCliente(idCliente: number):Observable<boolean>{
    return this.api.delete(`Clientes/Delete?id=${idCliente}`)
  }

  GetCliente(idCliente: number):Observable<Cliente>{
    return this.api.get(`Clientes/GetById?id=${idCliente}`)
  }

  getAllClientes():Observable<Cliente[]>{
    return this.api.get('Clientes/GetAll')
  }
}
