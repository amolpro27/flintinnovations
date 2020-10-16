import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPEKitsComponent } from './ppe-kits.component';

describe('PPEKitsComponent', () => {
  let component: PPEKitsComponent;
  let fixture: ComponentFixture<PPEKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPEKitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPEKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
