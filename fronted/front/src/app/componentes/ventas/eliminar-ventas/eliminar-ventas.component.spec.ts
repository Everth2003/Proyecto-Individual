import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVentasComponent } from './eliminar-ventas.component';

describe('EliminarVentasComponent', () => {
  let component: EliminarVentasComponent;
  let fixture: ComponentFixture<EliminarVentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarVentasComponent]
    });
    fixture = TestBed.createComponent(EliminarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
