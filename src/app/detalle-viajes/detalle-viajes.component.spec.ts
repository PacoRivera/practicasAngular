import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleViajesComponent } from './detalle-viajes.component';

describe('DetalleViajesComponent', () => {
  let component: DetalleViajesComponent;
  let fixture: ComponentFixture<DetalleViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
