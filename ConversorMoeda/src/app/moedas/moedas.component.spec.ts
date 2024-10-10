import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoedasComponent } from './moedas.component';

describe('MoedasComponent', () => {
  let componente: MoedasComponent;
  let fixture: ComponentFixture<MoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoedasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(componente).toBeTruthy();
  });
});
