import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalPeriodListComponent } from './historical-period-list.component';

describe('HistoricalPeriodListComponent', () => {
  let component: HistoricalPeriodListComponent;
  let fixture: ComponentFixture<HistoricalPeriodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalPeriodListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
