import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/productos';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/service3/productos.service';
@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit {
  public productos: Producto[]=[]
  public displayedColumns: string[] = ["id", " nombre", "marca", " precio", "stockmin", "cantidad", "tipoproducto"]
  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarProductos();
  }

mostrarProductos(){
  this.productosService.getAllProducto()
      .subscribe((productos: Producto[]) => {
        this.productos = productos;
        console.log(this.productos);
      });
}
}
