import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import 'bootstrap/js/dist/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ano: string;

  constructor() { }

  ngOnInit() {
    this.anoAtual();
  }

  enviarCurso (i) {
    // this.cursoService.
  }

  anoAtual () {
    this.ano = Date();
    console.log('r', this.ano);
  }

}
