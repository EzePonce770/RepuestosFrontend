import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //URL base, del cual se va a concatenar el resto de las llamadas a la api.
  private baseUrl = 'https://localhost:7051/api/';
  private httpOptions?: {headers: HttpHeaders, body?: object};
  constructor(
    private http: HttpClient) {

  }

  public get<T>(url:string):Observable<T>{
      const completeUrl = this.baseUrl + url;
      return this.http.get<T>(completeUrl, this.httpOptions);
  }

  public post<T>(url:string, body?: any):Observable<T>{
      const completeUrl = this.baseUrl + url;
      return this.http.post<T>(completeUrl, body, this.httpOptions);
  }

  public put<T>(url:string, body: any):Observable<T>{
      const completeUrl = this.baseUrl + url;
      return this.http.put<T>(completeUrl, body, this.httpOptions);
  }
  
  public delete<T>(url:string):Observable<T>{
      const completeUrl = this.baseUrl + url;
      return this.http.delete<T>(completeUrl, this.httpOptions);
  }


}
