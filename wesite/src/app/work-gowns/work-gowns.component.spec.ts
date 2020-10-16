import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGownsComponent } from './work-gowns.component';

describe('WorkGownsComponent', () => {
  let component: WorkGownsComponent;
  let fixture: ComponentFixture<WorkGownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
