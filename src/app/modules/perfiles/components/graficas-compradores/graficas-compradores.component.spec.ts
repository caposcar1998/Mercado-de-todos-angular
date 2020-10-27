import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasCompradoresComponent } from './graficas-compradores.component';

describe('GraficasCompradoresComponent', () => {
  let component: GraficasCompradoresComponent;
  let fixture: ComponentFixture<GraficasCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficasCompradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
