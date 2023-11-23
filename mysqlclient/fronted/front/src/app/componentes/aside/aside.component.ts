
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes',
        items: [
          {
            label: 'Crear clientes',
            icon: 'pi pi-user-plus',
            routerLink: '/crear-cliente'
          },
          {
            label: 'Mostrar clientes',
            icon: 'pi pi-users',
            routerLink: '/mostrar-cliente'
          },
          {
            label: 'Actualizar clientes',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizar-cliente'
          },
          {
            label: 'Eliminar clientes',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminar-cliente'
          },
        
        ]
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: '/tipo_productos',
        items: [
          {
            label: 'Crear tipo productos',
            icon: 'pi pi-plus-circle',
            routerLink: '/crear-tipo-productos',
          },
          {
            label: 'Mostrar tipo productos',
            icon: 'pi pi-mobile',
            routerLink: '/mostrar-tipo-productos',
          },
          {
            label: 'Actualizar tipo productos',
            icon: 'pi pi-pencil',
            routerLink: '/actualizar-tipo-productos',
          },
          {
            label: 'Eliminar tipo productos',
            icon: 'pi pi-minus-circle',
            routerLink: '/eliminar-tipo-productos',
          }
        ]
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-mobile',
        routerLink: '/productos',
        items: [

          {
          label: 'Crear productos',
          icon: 'pi pi-plus-circle',
          routerLink: '/crear-productos',
          },
          {
          label: 'Mostrar productos',
          icon: 'pi pi-fw pi-shopping-bag',
          routerLink: '/mostrar-productos',
          },
          {
          label: 'Actualizar productos',
          icon: 'pi pi-pencil',
          routerLink: '/actualizar-productos',
          },
          {
          label: 'Eliminar productos',
          icon: 'pi pi-minus-circle',
          routerLink: 'eliminar-productos',
          }
        ]

      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/ventas',
        items: [

          {
            label: 'Crear ventas',
            icon: 'pi pi-fw pi-cart-plus',
            routerLink: '/crear-ventas',
          },
          {
            label: 'Mostrar ventas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/mostrar-ventas',
          },
          {
            label: 'Actualizar ventas',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/actualizar-ventas',
          },
          {
            label: 'Eliminar ventas',
            icon: 'pi pi-fw pi-minus-circle', 
            routerLink: '/eliminar-ventas',
          }

        ]
      }
    ]
  }
}
