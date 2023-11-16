import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { PanelMenuModule } from 'primeng/panelmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/layout/header/header.component';
import { ContentComponent } from './componentes/layout/content/content.component';
import { FooterComponent } from './componentes/layout/footer/footer.component';
import { AsideComponent } from './componentes/aside/aside.component';

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

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    CrearClienteComponent,
    MostrarClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent,
    
    CrearTipoProductosComponent,
    MostrarTipoProductoComponent,
    ActualizarTipoProductosComponent,
    EliminarTipoProductosComponent,

    CrearProductosComponent,
    MostrarProductosComponent,
    ActualizarProductosComponent,
    EliminarProductosComponent,
    
    CrearVentasComponent,
    MostrarVentasComponent,
    ActualizarVentasComponent,
    EliminarVentasComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
    
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
