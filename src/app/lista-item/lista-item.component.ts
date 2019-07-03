import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/typings/Lista';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})

export class ListaItemComponent implements OnInit {

  @Input() data: Lista;

  constructor() { }

  ngOnInit() {
  }

}
