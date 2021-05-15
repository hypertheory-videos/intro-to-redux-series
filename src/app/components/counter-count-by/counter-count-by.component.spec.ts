import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCountByComponent } from './counter-count-by.component';

describe('CounterCountByComponent', () => {
  let component: CounterCountByComponent;
  let fixture: ComponentFixture<CounterCountByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCountByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCountByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
