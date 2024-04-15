import { Component, OnInit } from '@angular/core';
import { HistoricalPeriodService } from '../../services/historical-period.service';
import { HistoricalPeriod } from '../../models/historical-period.model';

@Component({
  selector: 'app-historical-period-list',
  templateUrl: './historical-period-list.component.html',
  styleUrls: ['./historical-period-list.component.css']
})
export class HistoricalPeriodListComponent implements OnInit {
  historicalPeriods: HistoricalPeriod[] = []; // Initialize as empty array

  constructor(private historicalPeriodService: HistoricalPeriodService) {}

  ngOnInit() {
    this.loadHistoricalPeriods();
  }

  loadHistoricalPeriods() {
    this.historicalPeriodService.getHistoricalPeriods().subscribe(
      (data) => {
        this.historicalPeriods = data;
      },
      (error) => {
        console.error('Error loading historical periods', error);
      }
    );
  }
}
