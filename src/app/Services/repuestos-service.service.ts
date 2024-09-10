import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IDMarcaNavigation, Repuesto } from '../Interfaces/repuestos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepuestosServiceService {

  constructor(private api: ApiService) { }

  createRepuesto(repuesto: Repuesto): Observable<Repuesto>{
    console.log("hasta aca funciona",repuesto)
    return this.api.post('Repuestos/Create',repuesto)
    
  }

  DeleteRepuesto(idRepuesto: number):Observable<boolean>{
    return this.api.delete(`Repuestos/Delete?id=${idRepuesto}`)
  }

  GetRepuestos(idRepuesto: number):Observable<Repuesto>{
    return this.api.get(`Repuestos/GetbyId?id=${idRepuesto}`)
  }

  getAllRepuestos():Observable<Repuesto[]>{
    return this.api.get('Repuestos/GetAll')
  }

  getMarcas():Observable<IDMarcaNavigation[]>{
    return this.api.get('Marcas/GetAll')
  }

}
