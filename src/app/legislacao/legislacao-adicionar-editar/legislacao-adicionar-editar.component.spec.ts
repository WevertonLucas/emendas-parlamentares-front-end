import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislacaoAdicionarEditarComponent } from './legislacao-adicionar-editar.component';

describe('LegislacaoAdicionarEditarComponent', () => {
  let component: LegislacaoAdicionarEditarComponent;
  let fixture: ComponentFixture<LegislacaoAdicionarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislacaoAdicionarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislacaoAdicionarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
