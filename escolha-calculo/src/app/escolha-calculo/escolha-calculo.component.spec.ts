import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaCalculoComponent } from './escolha-calculo.component';

describe('EscolhaCalculoComponent', () => {
  let component: EscolhaCalculoComponent;
  let fixture: ComponentFixture<EscolhaCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaCalculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
