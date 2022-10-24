import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReadComponent } from './cadastro-read.component';

describe('CadastroReadComponent', () => {
  let component: CadastroReadComponent;
  let fixture: ComponentFixture<CadastroReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
