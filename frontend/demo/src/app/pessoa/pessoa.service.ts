import { Pessoa } from './pessoa';
import { PessoaFilter } from './pessoa-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PessoaService {
  pessoaList: Pessoa[] = [];
  api = 'http://localhost:8888/pessoas';
  apiSearch = '/findByName/';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Pessoa> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Pessoa>(url, { params, headers });
  }

  load(filter: PessoaFilter): void {
    this.find(filter).subscribe(result => {
      this.pessoaList = result;
    },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: PessoaFilter): Observable<Pessoa[]> {
    const params = {
      'nome': filter.nome,
    };
    return filter.nome !== "" ? this.http.get<Pessoa[]>(this.api + this.apiSearch + filter.nome, {}) : this.http.get<Pessoa[]>(this.api, { params, headers });
  }

  save(entity: Pessoa): Observable<Pessoa> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Pessoa>(url, entity, { headers, params });
    } else {
      url = `${this.api}`;
      return this.http.post<Pessoa>(url, entity, { headers, params });
    }
  }

  delete(entity: Pessoa): Observable<Pessoa> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Pessoa>(url, { headers, params });
    }
    return null;
  }
}

