import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceShieldsComponent } from './face-shields.component';

describe('FaceShieldsComponent', () => {
  let component: FaceShieldsComponent;
  let fixture: ComponentFixture<FaceShieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceShieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceShieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
