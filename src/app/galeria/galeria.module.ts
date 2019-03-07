import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GaleriaComponent } from './galeria.component';
import { GaleriaCertificadosComponent } from './galeria-certificados/galeria-certificados.component';
import { GaleriaDiaComponent } from './galeria-dia/galeria-dia.component';
import { GaleriaRoutingModule } from './galeria.routing.module';

import { HeaderModule } from './../header/header.module';
import { GaleriaService } from './galeria.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GaleriaRoutingModule,
    HeaderModule
],
  declarations: [
    GaleriaComponent,
    GaleriaCertificadosComponent,
    GaleriaDiaComponent
  ],
  exports: [
    GaleriaComponent,
    GaleriaCertificadosComponent,
    GaleriaDiaComponent
  ],
  providers: [GaleriaService]
})
export class GaleriaModule { }
