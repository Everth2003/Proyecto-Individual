import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/model/tipo-producto';
import { Router } from '@angular/router';
import { TipoProductoService } from 'src/app/service2/tipo-productos.service';

@Component({
  selector: 'app-mostrar-tipo-productos',
  templateUrl: './mostrar-tipo-productos.component.html',
  styleUrls: ['./mostrar-tipo-productos.component.css']
})
export class MostrarTipoProductoComponent implements OnInit {
  public tproductos:TipoProducto[] = []
  public displayedColumns: string[] = ["id", "nombre"]
  constructor(
    private tproductoService: TipoProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarTipoProducto();
  }
  
  mostrarTipoProducto() {
    this.tproductoService.getAllTipoProducto()
      .subscribe((tproductos: TipoProducto[]) => {
        this.tproductos = tproductos;
        console.log(this.tproductos);
      });
  }
}