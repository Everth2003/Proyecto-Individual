import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProducto } from '../model/tipo-producto';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/tipo_productos/`
  constructor(
    private http:HttpClient
  ) { }

  getAllTipoProducto(){
    return this.http
    .get<TipoProducto[]>(this.base_path)
  }

  createTipoProducto(data: any): Observable<TipoProducto> {
    return this.http.post<TipoProducto>(this.base_path, data);
  }
}