import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLinguagensComponent } from './lista-linguagens.component';

describe('ListaLinguagensComponent', () => {
  let component: ListaLinguagensComponent;
  let fixture: ComponentFixture<ListaLinguagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLinguagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
