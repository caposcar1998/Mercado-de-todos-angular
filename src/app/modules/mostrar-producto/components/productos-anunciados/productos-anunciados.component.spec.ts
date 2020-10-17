import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAnunciadosComponent } from './productos-anunciados.component';

describe('ProductosAnunciadosComponent', () => {
  let component: ProductosAnunciadosComponent;
  let fixture: ComponentFixture<ProductosAnunciadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosAnunciadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAnunciadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
