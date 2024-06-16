import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanacentralComponent } from './ventanacentral.component';

describe('VentanacentralComponent', () => {
  let component: VentanacentralComponent;
  let fixture: ComponentFixture<VentanacentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanacentralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanacentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
