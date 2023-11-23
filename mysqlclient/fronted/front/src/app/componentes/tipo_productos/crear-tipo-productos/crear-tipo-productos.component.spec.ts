import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoProductosComponent } from './crear-tipo-productos.component';

describe('CrearTipoProductosComponent', () => {
  let component: CrearTipoProductosComponent;
  let fixture: ComponentFixture<CrearTipoProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearTipoProductosComponent]
    });
    fixture = TestBed.createComponent(CrearTipoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
