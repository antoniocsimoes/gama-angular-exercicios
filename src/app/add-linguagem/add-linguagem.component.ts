import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Router } from '@angular/router';
import { Lista } from 'src/typings/Lista';

@Component({
  selector: 'app-add-linguagem',
  templateUrl: './add-linguagem.component.html',
  styleUrls: ['./add-linguagem.component.css']
})
export class AddLinguagemComponent implements OnInit {

  list: Lista = {
    id: null,
    name: '',
    creator: '',
    year: null
  };

  constructor(private listaService: ListaService, private router:Router) { }

  ngOnInit() {
  }

  enviarLista(){
    console.log(this.list);
    
    this.listaService.adicionarLang(this.list).subscribe(() => { alert('Linguagem adicionada com sucesso');
    this.router.navigateByUrl('/lista');
    }); 
    
}

}
