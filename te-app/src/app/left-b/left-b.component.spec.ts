import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBComponent } from './left-b.component';

describe('LeftBComponent', () => {
  let component: LeftBComponent;
  let fixture: ComponentFixture<LeftBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
