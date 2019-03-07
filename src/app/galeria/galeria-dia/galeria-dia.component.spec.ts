import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDiaComponent } from './galeria-dia.component';

describe('GaleriaDiaComponent', () => {
  let component: GaleriaDiaComponent;
  let fixture: ComponentFixture<GaleriaDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
