import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Repuesto } from '../Interfaces/repuestos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepuestosServiceService {

  constructor(private api: ApiService) { }

  createClientes(cliente: Repuesto): Observable<Repuesto>{
    return this.api.post('Clientes/Create',cliente)
  }

  DeleteCliente(idCliente: number):Observable<boolean>{
    return this.api.delete(`Clientes/Delete?id=${idCliente}`)
  }

  GetCliente(idCliente: number):Observable<Repuesto>{
    return this.api.get(`Clientes/GetById?id=${idCliente}`)
  }

  getAllClientes():Observable<Repuesto[]>{
    return this.api.get('Clientes/GetAll')
  }

}
