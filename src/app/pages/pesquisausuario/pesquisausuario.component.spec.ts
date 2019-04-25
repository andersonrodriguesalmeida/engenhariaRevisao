import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaUsuarioComponent } from './pesquisausuario.component';

describe('PesquisausuarioComponent', () => {
  let component: PesquisaUsuarioComponent;
  let fixture: ComponentFixture<PesquisaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
