import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { CursosComponent } from './../cursos/cursos.component';


import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cursos/:id', component: CursosComponent}

];

// const routerOptions: ExtraOptions = {
//   useHash: true,
//   anchorScrolling: 'enabled',
//   // ...any other options you'd like to use
// };routerOptions

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
