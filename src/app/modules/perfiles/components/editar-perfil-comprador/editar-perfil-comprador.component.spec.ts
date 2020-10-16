import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilCompradorComponent } from './editar-perfil-comprador.component';

describe('EditarPerfilCompradorComponent', () => {
  let component: EditarPerfilCompradorComponent;
  let fixture: ComponentFixture<EditarPerfilCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerfilCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
