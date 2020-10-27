import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasVendedorComponent } from './graficas-vendedor.component';

describe('GraficasVendedorComponent', () => {
  let component: GraficasVendedorComponent;
  let fixture: ComponentFixture<GraficasVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficasVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
