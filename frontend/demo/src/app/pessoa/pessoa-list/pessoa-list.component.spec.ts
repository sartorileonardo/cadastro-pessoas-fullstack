import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PessoaListComponent } from './pessoa-list.component';
import { PessoaService } from '../pessoa.service';

describe('PessoaListComponent', () => {
  let component: PessoaListComponent;
  let fixture: ComponentFixture<PessoaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PessoaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
