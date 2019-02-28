import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorAdicionarEditarComponent } from './autor-adicionar-editar.component';

describe('AutorAdicionarEditarComponent', () => {
  let component: AutorAdicionarEditarComponent;
  let fixture: ComponentFixture<AutorAdicionarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorAdicionarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorAdicionarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
