import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcarsComponent } from './rentcars.component';

describe('RentcarsComponent', () => {
  let component: RentcarsComponent;
  let fixture: ComponentFixture<RentcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
