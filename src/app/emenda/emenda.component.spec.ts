import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmendaComponent } from './emenda.component';

describe('EmendaComponent', () => {
  let component: EmendaComponent;
  let fixture: ComponentFixture<EmendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
