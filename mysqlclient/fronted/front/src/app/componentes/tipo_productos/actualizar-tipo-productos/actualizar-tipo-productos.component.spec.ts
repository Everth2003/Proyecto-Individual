import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoProductosComponent } from './actualizar-tipo-productos.component';

describe('ActualizarTipoProductosComponent', () => {
  let component: ActualizarTipoProductosComponent;
  let fixture: ComponentFixture<ActualizarTipoProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarTipoProductosComponent]
    });
    fixture = TestBed.createComponent(ActualizarTipoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
