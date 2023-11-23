import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/model/productos';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { ProductosService } from 'src/app/service3/productos.service';
@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    stockmin: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductosService,
    private messageService: MessageService,
    private router: Router,
  ) { }
  ngOnInit(): void {

  }
  onSubmit(): void {
    const formValue: Producto = this.form.value;
    console.log(formValue);
    this.productoService.createProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'Producto Creado', life: 5000 });


        }, 0);
        this.router.navigateByUrl('productos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/productos');
  }
  get nombre() { return this.form.get('nombre'); }
  get marca() { return this.form.get('marca'); }
  get precio() { return this.form.get('precio'); }
  get stockmin() { return this.form.get('stockmin'); }
  get cantidad() { return this.form.get('cantidad'); }
}
