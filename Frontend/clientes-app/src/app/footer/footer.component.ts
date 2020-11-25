import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  autor: any = { nombre: 'José Andrés', apellidos: 'Herrera Alcantar' };
  enlaceGitHub = 'https://github.com/Andres25b';

  constructor() {}

  ngOnInit(): void {}
}
