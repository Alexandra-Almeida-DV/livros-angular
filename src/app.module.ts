import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ControleEditoraService } from './app/controle-editora.service';
import { ControleLivrosService } from './app/controle-livros.service';
import { LivroListaComponent } from './app/livro-lista/livro-lista.component';
import { LivroDadosComponent } from './app/livro-dados/livro-dados.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LivroListaComponent,
   
  ],
  imports: [
    BrowserModule, 
    AppComponent,
    LivroDadosComponent, 
    LivroListaComponent, 
    FormsModule ,
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService,
  ],
})
export class AppModule { }
