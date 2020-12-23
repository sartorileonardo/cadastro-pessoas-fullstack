import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html'
})
export class PessoaEditComponent implements OnInit {

  id: string;
  pessoa: Pessoa;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Pessoa()); }
          return this.pessoaService.findById(id);
        })
      )
      .subscribe(pessoa => {
        this.pessoa = pessoa;
        this.feedback = {};
      },
        err => {
          this.feedback = { type: 'warning', message: 'Erro ao carregar a lista de pessoas cadastradas' };
        }
      );
  }

  save() {
    this.pessoaService.save(this.pessoa).subscribe(
      pessoa => {
        this.pessoa = pessoa;
        this.feedback = { type: 'success', message: 'Salvo com sucesso!' };
        setTimeout(() => {
          this.router.navigate(['/pessoas']);
        }, 1000);
      },
      err => {
        this.feedback = { type: 'warning', message: 'Desculpe, ocorreu um erro ao salvar: ' + err.message };
      }
    );
  }

  cancel() {
    this.router.navigate(['/pessoas']);
  }
}
