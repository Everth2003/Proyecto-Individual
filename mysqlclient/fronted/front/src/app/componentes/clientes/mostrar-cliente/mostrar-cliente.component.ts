import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service1/cliente.service';


@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent implements OnInit {

  public clientes: Cliente[] = []
  public displayedColumns: string[] = ["id", " nombreCliente ", "direccionCliente", " telefonoCliente", "correoCliente ", "passwordCliente"]
  constructor(
    private clientesService: ClienteService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarCliente();
  }

  mostrarCliente() {
    this.clientesService.getAllCliente()
      .subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;
        console.log(this.clientes);
      });
  }




}


