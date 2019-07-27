import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';


@Injectable()
export class GaleriaService {

 constructor(private http: HttpClient) {}

 adicionar (){}
 listar () {}
 deletar () {}
 atualizar () {}

 fotosInsta() {
  // return this.http.get(
  //   // 'https://api.instagram.com/oembed?url=https://www.instagram.com/p/Bt0qQa4gwGq/',
  //   'https://www.instagram.com/',
  //   // 'https://instagram.com/p/fA9uwTtkSN/media/?size=t',
  //   // 'https://api.instagram.com/oembed?url=https://www.instagram.com/spacocursos/',
  //   {
  //     headers: new HttpHeaders(
  //       {
  //         'Content-Type': 'application/json',
  //         // 'Accept': 'application/json',
  //         // 'Authorization': '',
  //         // observe: 'body',
  //         // responseType: 'json',
  //       })
  //   }).pipe(
  //     tap(console.log)
  //   );
}
}
