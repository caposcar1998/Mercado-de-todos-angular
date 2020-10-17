import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfilVendedorComponent } from './ver-perfil-vendedor.component';

describe('VerPerfilVendedorComponent', () => {
  let component: VerPerfilVendedorComponent;
  let fixture: ComponentFixture<VerPerfilVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPerfilVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPerfilVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
