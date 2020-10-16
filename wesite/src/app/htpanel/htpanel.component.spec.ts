import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtpanelComponent } from './htpanel.component';

describe('HtpanelComponent', () => {
  let component: HtpanelComponent;
  let fixture: ComponentFixture<HtpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
