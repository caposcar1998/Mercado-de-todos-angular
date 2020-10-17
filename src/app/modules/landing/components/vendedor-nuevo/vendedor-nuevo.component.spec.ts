import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorNuevoComponent } from './vendedor-nuevo.component';

describe('VendedorNuevoComponent', () => {
  let component: VendedorNuevoComponent;
  let fixture: ComponentFixture<VendedorNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
