import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Listapizzas } from './listapizzas';

describe('Listapizzas', () => {
  let component: Listapizzas;
  let fixture: ComponentFixture<Listapizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listapizzas],
    }).compileComponents();

    fixture = TestBed.createComponent(Listapizzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
