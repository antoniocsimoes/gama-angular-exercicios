import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Lista } from 'src/typings/Lista';

@Component({
  selector: 'app-lista-linguagens',
  templateUrl: './lista-linguagens.component.html',
  styleUrls: ['./lista-linguagens.component.css']
})
export class ListaLinguagensComponent implements OnInit {

  lista: Lista[] = [];

  constructor(private listaService: ListaService) { }

  ngOnInit() {
    this.listaService.getTodos().subscribe(value => {
      console.log(value);
      this.lista = value;
     });   
  }

}
