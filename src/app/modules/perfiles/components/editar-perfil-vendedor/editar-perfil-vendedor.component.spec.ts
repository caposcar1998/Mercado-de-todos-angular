import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilVendedorComponent } from './editar-perfil-vendedor.component';

describe('EditarPerfilVendedorComponent', () => {
  let component: EditarPerfilVendedorComponent;
  let fixture: ComponentFixture<EditarPerfilVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerfilVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
