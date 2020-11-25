import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent implements OnInit {
  listaCurso: string[] = [
    'Desarrolla aplicaciones web full-stack con Angular (frontend) y Spring Framework 5 + JPA (backend).',
    'Maneja los componentes, directivas, rutas, pipes y servicios de una aplicación Angular.',
    'Desarrolla un completo sistema de Facturas usando Angular + Spring Boot + JPA + Restful.',
    'Aprende a implementar subida de archivos,',
    'Despliega (deploy) el backend Spring en la nube con Heroku.',
    'Despliega el backend en producción localmente con Apache Tomcat embebido.',
    'Desarrolla una aplicación de CRUD completa usando Angular + Spring + JPA + Restful.',
    'Maneja Spring Security OAuth2 y JWT (autenticación y autorización basada en token).',
    'Aprende a implementar paginación de resultado con Angular y Spring.',
    'Despliega (deploy) el frontend Angular en la nube con Google Firebase.',
    'Despliega el frontend Angular en producción localmente con Apache(httpd) y con Node JS y Express.',
    'Integra y aprende a trabajar con MongoDB en Spring.',
  ];

  habilitar: boolean = true;

  constructor() {}

  setHabilitar(): void {
    this.habilitar = !this.habilitar;
  }

  ngOnInit(): void {}
}
