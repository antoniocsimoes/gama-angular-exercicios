import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ListaLinguagensComponent } from './lista-linguagens/lista-linguagens.component'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListaItemComponent } from './lista-item/lista-item.component';

library.add(fas);

const routes: Routes = [
  { path: 'lista', component: ListaLinguagensComponent } 
]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLinguagensComponent,
    ListaItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
