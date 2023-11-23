import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearClienteComponent } from './componentes/clientes/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './componentes/clientes/mostrar-cliente/mostrar-cliente.component';
import { ActualizarClienteComponent } from './componentes/clientes/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './componentes/clientes/eliminar-cliente/eliminar-cliente.component';

import { CrearTipoProductosComponent } from './componentes/tipo_productos/crear-tipo-productos/crear-tipo-productos.component';
import { MostrarTipoProductoComponent } from './componentes/tipo_productos/mostrar-tipo-productos/mostrar-tipo-productos.component';
import { ActualizarTipoProductosComponent } from './componentes/tipo_productos/actualizar-tipo-productos/actualizar-tipo-productos.component';
import { EliminarTipoProductosComponent } from './componentes/tipo_productos/eliminar-tipo-productos/eliminar-tipo-productos.component';

import { CrearProductosComponent } from './componentes/productos/crear-productos/crear-productos.component';
import { MostrarProductosComponent } from './componentes/productos/mostrar-productos/mostrar-productos.component';
import { ActualizarProductosComponent } from './componentes/productos/actualizar-productos/actualizar-productos.component';
import { EliminarProductosComponent } from './componentes/productos/eliminar-productos/eliminar-productos.component';

import { CrearVentasComponent } from './componentes/ventas/crear-ventas/crear-ventas.component';
import { MostrarVentasComponent } from './componentes/ventas/mostrar-ventas/mostrar-ventas.component';
import { ActualizarVentasComponent } from './componentes/ventas/actualizar-ventas/actualizar-ventas.component';
import { EliminarVentasComponent } from './componentes/ventas/eliminar-ventas/eliminar-ventas.component';

const routes: Routes = [

{path: 'crear-cliente', component: CrearClienteComponent},
{path: 'mostrar-cliente', component: MostrarClienteComponent},
{path: 'actualizar-cliente', component: ActualizarClienteComponent},
{path: 'eliminar-cliente', component: EliminarClienteComponent},
{
  path: 'crear-tipo-productos', 
  component: CrearTipoProductosComponent
},
{
  path: 'mostrar-tipo-productos',
  component: MostrarTipoProductoComponent
},

{
  path: 'actualizar-tipo-productos',
  component: ActualizarTipoProductosComponent
},
{
  path: 'eliminar-tipo-productos',
  component: EliminarTipoProductosComponent
},
{
  path: 'crear-productos',
  component: CrearProductosComponent
},
{
  path: 'mostrar-productos',
  component: MostrarProductosComponent
},
{
  path: 'actualizar-productos',
  component: ActualizarProductosComponent
},
{
  path: 'eliminar-productos',
  component: EliminarProductosComponent
},

{path: 'crear-ventas', component: CrearVentasComponent},
{path: 'mostrar-ventas', component: MostrarVentasComponent},
{path: 'actualizar-ventas', component:ActualizarVentasComponent},
{path: 'eliminar-ventas', component: EliminarVentasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
