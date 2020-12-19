import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PessoaEditComponent } from './pessoa-edit.component';
import { PessoaService } from '../pessoa.service';

describe('PessoaEditComponent', () => {
  let component: PessoaEditComponent;
  let fixture: ComponentFixture<PessoaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PessoaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
