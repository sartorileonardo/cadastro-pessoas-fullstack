import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { PessoaService } from './pessoa.service';
import { PESSOA_ROUTES } from './pessoa.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PESSOA_ROUTES)
  ],
  declarations: [
    PessoaListComponent,
    PessoaEditComponent
  ],
  providers: [PessoaService],
  exports: []
})
export class PessoaModule { }
