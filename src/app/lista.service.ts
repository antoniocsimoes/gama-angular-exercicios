import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lista } from 'src/typings/Lista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private httpClient: HttpClient) {  }

  getTodos(): Observable<Lista[]>{
    return this.httpClient.get<Lista[]>('http://localhost:3000/linguagens');
  }

  adicionarLang(lista:Lista){
    console.log(lista);
    return this.httpClient.post('http://localhost:3000/linguagens', lista);
  }
}
