import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitizersComponent } from './sanitizers.component';

describe('SanitizersComponent', () => {
  let component: SanitizersComponent;
  let fixture: ComponentFixture<SanitizersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitizersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
