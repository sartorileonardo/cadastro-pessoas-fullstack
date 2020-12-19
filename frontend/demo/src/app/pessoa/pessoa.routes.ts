import { Routes } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';

export const PESSOA_ROUTES: Routes = [
  {
    path: 'pessoas',
    component: PessoaListComponent
  },
  {
    path: 'pessoas/:id',
    component: PessoaEditComponent
  }
];
