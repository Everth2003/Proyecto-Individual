import { Component , OnInit} from '@angular/core';
import { Venta } from 'src/app/models/ventas';
import { Router } from '@angular/router';
import { VentasService } from 'src/app/service4/ventas.service';

@Component({
  selector: 'app-mostrar-ventas',
  templateUrl: './mostrar-ventas.component.html',
  styleUrls: ['./mostrar-ventas.component.css']
})
export class MostrarVentasComponent implements OnInit {
  public ventas: Venta[]=[]
  public displayedColumns: string[] = ["id", " fecha", "descuento", " total", "subtotal", "updated", "cliente"]
  constructor(
    private ventasService: VentasService, 
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.mostrarVentas();
  }

  mostrarVentas(){
    this.ventasService.getAllVenta()
      .subscribe((ventas: Venta[]) => {
        this.ventas = ventas;
        console.log(this.ventas);
      });
  }

}
