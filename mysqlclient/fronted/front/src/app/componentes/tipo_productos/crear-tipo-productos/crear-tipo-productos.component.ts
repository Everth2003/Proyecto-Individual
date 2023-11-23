import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoProducto } from 'src/app/model/tipo-producto';
import { TipoProductoService } from 'src/app/service2/tipo-productos.service';
import { Router } from '@angular/router';
import {Message, MessageService } from 'primeng/api';
@Component({
  selector: 'app-crear-tipo-productos',
  templateUrl: './crear-tipo-productos.component.html',
  styleUrls: ['./crear-tipo-productos.component.css']
})
export class CrearTipoProductosComponent implements OnInit{

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
   
  });
  constructor(
    private formBuilder: FormBuilder,
    private tipoproductoService: TipoProductoService, 
    private messageService: MessageService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  
  }
 
  onSubmit(): void {
    const formValue: TipoProducto = this.form.value;
    console.log(formValue);
    this.tipoproductoService.createTipoProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Tipo producto Creado', life:5000});


        }, 0);
         this.router.navigateByUrl('tipo_productos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/tipo_productos');
  }
  get nombre() { return this.form.get('nombre tipo producto'); }


}
