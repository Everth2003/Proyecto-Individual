import { Component, OnInit} from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service1/cliente.service';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit{



  public clientes:Cliente[] = []
  public msgs1: Message[]=[];
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private messageService: MessageService
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
