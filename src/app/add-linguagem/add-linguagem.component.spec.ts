import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinguagemComponent } from './add-linguagem.component';

describe('AddLinguagemComponent', () => {
  let component: AddLinguagemComponent;
  let fixture: ComponentFixture<AddLinguagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinguagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinguagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
