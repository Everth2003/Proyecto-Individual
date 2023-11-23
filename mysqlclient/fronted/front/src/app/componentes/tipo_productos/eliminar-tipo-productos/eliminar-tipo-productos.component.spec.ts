import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoProductosComponent } from './eliminar-tipo-productos.component';

describe('EliminarTipoProductosComponent', () => {
  let component: EliminarTipoProductosComponent;
  let fixture: ComponentFixture<EliminarTipoProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarTipoProductosComponent]
    });
    fixture = TestBed.createComponent(EliminarTipoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
