import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosRoutingModule } from './cursos.routing.module';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { WebComponent } from './web/web.component';
import { GamesComponent } from './games/games.component';
import { VideoComponent } from './video/video.component';
import { InformaticaComponent } from './informatica/informatica.component';
import { DesignerComponent } from './designer/designer.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { ProfissionalizantesComponent } from './profissionalizantes/profissionalizantes.component';

import { CursoService } from './curso.service';

import { HeaderModule } from './../header/header.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursoNaoEncontradoComponent,
    DesignerComponent,
    ProfissionalizantesComponent,
    InformaticaComponent,
    ProgramacaoComponent,
    WebComponent,
    GamesComponent,
    VideoComponent,
    FotografiaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    HeaderModule
  ],
  providers: [ CursoService],
  exports: [
    CursosComponent,
    CursoNaoEncontradoComponent,
    DesignerComponent,
    InformaticaComponent,
    ProfissionalizantesComponent,
    ProgramacaoComponent,
    WebComponent,
    GamesComponent,
    VideoComponent,
    FotografiaComponent
  ],
})
export class CursosModule { }
