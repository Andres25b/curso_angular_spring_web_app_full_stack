import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Bienvenido a Angular';
  curso: string =
    'Angular & Spring 5: Creando web app full stack (Angular 10+)';
  profesor: string = 'Andrés Guzmán';
}
