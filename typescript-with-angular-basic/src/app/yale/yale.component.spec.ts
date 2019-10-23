import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaleComponent } from './yale.component';

describe('YaleComponent', () => {
  let component: YaleComponent;
  let fixture: ComponentFixture<YaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
