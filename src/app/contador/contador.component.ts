import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
library.add(fas);

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
  
})
export class ContadorComponent implements OnInit {
  contador = 0;  

  constructor() { }

  ngOnInit() {
  }

  
increases() {  
  this.contador ++;
}

decreases() {  
  this.contador --;
}



}
