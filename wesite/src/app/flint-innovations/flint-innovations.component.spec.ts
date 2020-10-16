import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlintInnovationsComponent } from './flint-innovations.component';

describe('FlintInnovationsComponent', () => {
  let component: FlintInnovationsComponent;
  let fixture: ComponentFixture<FlintInnovationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlintInnovationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlintInnovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
