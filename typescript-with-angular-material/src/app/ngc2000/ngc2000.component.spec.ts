import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngc2000Component } from './ngc2000.component';

describe('Ngc2000Component', () => {
  let component: Ngc2000Component;
  let fixture: ComponentFixture<Ngc2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngc2000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngc2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
