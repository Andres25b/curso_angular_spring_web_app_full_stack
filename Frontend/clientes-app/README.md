# Frontend: Clientes-app

**ÍNDICE**

1. [Creación del proyecto](#id1)
2. [Creación del componente Header](#id2)

---

<div id="id1" />

## Creación del proyecto.

- Con ayuda de angular cli, crearemos el proyecto 'cliente-app' a partir del siguiente comando:

        ng new cliente-app

---

<div id="id2" />

## Creación del componente Header

- Con ayuda de angular cli, crearemos nuestro primer componente llamado 'header':

        ng g c header

- Estructura del archivo 'header.component.ts':

        import { Component, OnInit } from '@angular/core';

        @Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css'],
        })
        export class HeaderComponent implements OnInit {
        titulo: string = 'AppAngularSrpring';

        constructor() {}

        ngOnInit(): void {}
        }
