import { Component, OnInit } from '@angular/core';
import { PessoaFilter } from '../pessoa-filter';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: 'pessoa-list.component.html'
})
export class PessoaListComponent implements OnInit {

  filter = new PessoaFilter();
  selectedPessoa: Pessoa;
  feedback: any = {};

  get pessoaList(): Pessoa[] {
    return this.pessoaService.pessoaList;
  }

  constructor(private pessoaService: PessoaService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.pessoaService.load(this.filter);
  }

  select(selected: Pessoa): void {
    this.selectedPessoa = selected;
  }

  delete(pessoa: Pessoa): void {
    if (confirm('Deseja mesmo remover a pessoa selecionada?')) {
      this.pessoaService.delete(pessoa).subscribe(() => {
          this.feedback = {type: 'success', message: 'Removido com sucesso!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Desculpe, ocorreu um erro ao remover: '+err.message};
        }
      );
    }
  }
}
