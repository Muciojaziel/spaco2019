import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { WebComponent } from './web/web.component';
import { VideoComponent } from './video/video.component';
import { FotografiaComponent } from './fotografia/fotografia.component';
import { GamesComponent } from './games/games.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { DesignerComponent } from './designer/designer.component';
import { ProfissionalizantesComponent } from './profissionalizantes/profissionalizantes.component';
import { InformaticaComponent } from './informatica/informatica.component';

const routes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursosComponent},
  {path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent},
  {path: 'informatica', component: InformaticaComponent},
  {path: 'profissionalizantes', component: ProfissionalizantesComponent},
  {path: 'designer', component: DesignerComponent},
  {path: 'web', component: WebComponent},
  {path: 'videos', component: VideoComponent},
  {path: 'fotografia', component: FotografiaComponent },
  {path: 'programacao', component: ProgramacaoComponent},
  {path: 'games', component: GamesComponent },
  // {path: '', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
