import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaCertificadosComponent } from './galeria-certificados.component';

describe('GaleriaCertificadosComponent', () => {
  let component: GaleriaCertificadosComponent;
  let fixture: ComponentFixture<GaleriaCertificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaCertificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
