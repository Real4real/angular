import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthBComponent } from './rigth-b.component';

describe('RigthBComponent', () => {
  let component: RigthBComponent;
  let fixture: ComponentFixture<RigthBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigthBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigthBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
