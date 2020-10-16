import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmnioticareComponent } from './amnioticare.component';

describe('AmnioticareComponent', () => {
  let component: AmnioticareComponent;
  let fixture: ComponentFixture<AmnioticareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmnioticareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmnioticareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
