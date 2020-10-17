import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPerfilCompradorComponent } from './ver-perfil-comprador.component';

describe('VerPerfilCompradorComponent', () => {
  let component: VerPerfilCompradorComponent;
  let fixture: ComponentFixture<VerPerfilCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPerfilCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPerfilCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
