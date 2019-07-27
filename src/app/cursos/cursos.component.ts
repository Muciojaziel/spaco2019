import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  telaCurso: void;
  telaInfo: any;
  telaProf: any;
  telaFoto: any;
  telaGames: any;
  telaDesigner: any;
  telaWeb: any;
  telaVideo: any;
  telaProgramacao: any;
  telaDesabilitada: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   this.rotas();
  }

  rotas () {
    this.route.params.subscribe(res => {
      if (res.id === 'info') {
        console.log(res.id);
        this.telaInfo = res.id;
        return this.telaInfo;
      } if (res.id === 'profissionalizantes') {
        // console.log(res.id);
        this.telaProf = res.id;
        return this.telaProf;
      } if (res.id === 'designer') {
        // console.log(res.id);
        this.telaDesigner = res.id;
        return this.telaDesigner;
      } if (res.id === 'games') {
        // console.log(res.id);
        this.telaGames = res.id;
        return this.telaGames;
      } if (res.id === 'fotografia') {
        // console.log(res.id);
        this.telaFoto = res.id;
        return this.telaFoto;
      } if (res.id === 'web') {
        // console.log(res.id);
        this.telaWeb = res.id;
        return this.telaWeb;
      } if (res.id === 'video') {
        // console.log(res.id);
        this.telaVideo = res.id;
        return this.telaVideo;
      } if (res.id === 'programacao') {
        // console.log(res.id);
        this.telaProgramacao = res.id;
        return this.telaProgramacao;
      } else {
        this.router.navigate(['/cursoNaoEncontrado']);
      }
      });
  }
}
