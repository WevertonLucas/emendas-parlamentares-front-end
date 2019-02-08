import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmendaAdicionarEditarComponent } from './emenda-adicionar-editar.component';

describe('EmendaAdicionarEditarComponent', () => {
  let component: EmendaAdicionarEditarComponent;
  let fixture: ComponentFixture<EmendaAdicionarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmendaAdicionarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmendaAdicionarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
