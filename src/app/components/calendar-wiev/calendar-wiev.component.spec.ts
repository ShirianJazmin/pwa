import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWievComponent } from './calendar-wiev.component';

describe('CalendarWievComponent', () => {
  let component: CalendarWievComponent;
  let fixture: ComponentFixture<CalendarWievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarWievComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarWievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
