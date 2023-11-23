import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTipoProductosComponent } from './mostrar-tipo-productos.component';

describe('MostrarTipoProductosComponent', () => {
  let component: MostrarTipoProductosComponent;
  let fixture: ComponentFixture<MostrarTipoProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarTipoProductosComponent]
    });
    fixture = TestBed.createComponent(MostrarTipoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
