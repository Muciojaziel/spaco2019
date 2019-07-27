import { Component, OnInit } from '@angular/core';
import { GaleriaService } from './galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  fotos;

  constructor(private galeriaService: GaleriaService) { }

  ngOnInit() {
    this.teste();
  }

  teste () {
    // this.galeriaService.fotosInsta().subscribe( r => {
    //   this.fotos = r;
    //   console.log('fotos', this.fotos);
    // });
    // return this.fotos;
  }
}
