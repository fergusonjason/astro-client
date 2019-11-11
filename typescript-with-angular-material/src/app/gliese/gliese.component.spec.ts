import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlieseComponent } from './gliese.component';

describe('GlieseComponent', () => {
  let component: GlieseComponent;
  let fixture: ComponentFixture<GlieseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlieseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
