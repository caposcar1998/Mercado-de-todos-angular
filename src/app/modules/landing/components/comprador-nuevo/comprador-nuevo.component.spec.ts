import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorNuevoComponent } from './comprador-nuevo.component';

describe('CompradorNuevoComponent', () => {
  let component: CompradorNuevoComponent;
  let fixture: ComponentFixture<CompradorNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
