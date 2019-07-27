import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaComponent } from './galeria.component';
import { GaleriaCertificadosComponent } from './galeria-certificados/galeria-certificados.component';
import { GaleriaDiaComponent } from './galeria-dia/galeria-dia.component';


const routes: Routes = [
    { path: 'galeria', component: GaleriaComponent },
    { path: 'certificados', component: GaleriaCertificadosComponent },
    { path: 'cotidiano', component: GaleriaDiaComponent }
    // { path: '', component:}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GaleriaRoutingModule { }
