import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro; 
  public autoresForm: string = ''; 
  public editoras: Array<Editora> = []; 
  private servEditora: ControleEditoraService; 
  private servLivros: ControleLivrosService;
  private router: Router; 
 
  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService, router: Router) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;

    this.livro = new Livro(0, 0, '', '', []);
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras(); 
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n'); 
    this.servLivros.incluir(this.livro); 
    this.router.navigateByUrl('/lista'); 
  }
}
