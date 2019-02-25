import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislacaoDetalheComponent } from './legislacao-detalhe.component';

describe('LegislacaoDetalheComponent', () => {
  let component: LegislacaoDetalheComponent;
  let fixture: ComponentFixture<LegislacaoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislacaoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislacaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
