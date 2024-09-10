import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'facturacion-repuestos';
  isModalOpen = false; 
  showImage = true; 

  items = [
    {
      label: 'Facturas',
      icon: 'pi pi-fw pi-file',
      items: [
        { label: 'Ver', icon: 'pi pi-fw pi-eye', routerLink: ['facturasList'] },
        { label: 'Agregar', icon: 'pi pi-fw pi-plus', routerLink: ['/facturas/create'] }
      ]
    },
    {
      label: 'Repuestos',
      icon: 'pi pi-fw pi-cog',
      items: [
        { label: 'Ver', icon: 'pi pi-fw pi-eye', routerLink: ['repuestosList'] },
        { label: 'Agregar', icon: 'pi pi-fw pi-plus', routerLink: ['repuestosCreate'] }
      ]
    },
    {
      label: 'Clientes',
      icon: 'pi pi-fw pi-users',
      items: [
        { label: 'Ver', icon: 'pi pi-fw pi-eye', routerLink: ['clientesList'] },
        { label: 'Agregar', icon: 'pi pi-fw pi-plus', routerLink: ['/clientes/create'] }
      ]
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Ruta actual:', event.url);

        this.showImage = false;
      }
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
