import { TestBed } from '@angular/core/testing';
import { PessoaService } from './pessoa.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PessoaService', () => {
  let service: PessoaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PessoaService]
    });

    service = TestBed.get(PessoaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
