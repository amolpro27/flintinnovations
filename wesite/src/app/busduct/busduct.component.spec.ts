import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusductComponent } from './busduct.component';

describe('BusductComponent', () => {
  let component: BusductComponent;
  let fixture: ComponentFixture<BusductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
