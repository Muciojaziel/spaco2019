import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalizantesComponent } from './profissionalizantes.component';

describe('ProfissionalizantesComponent', () => {
  let component: ProfissionalizantesComponent;
  let fixture: ComponentFixture<ProfissionalizantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalizantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalizantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
