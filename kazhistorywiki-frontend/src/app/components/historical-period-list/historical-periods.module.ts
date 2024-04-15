import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalPeriodListComponent } from './historical-period-list.component';

@NgModule({
  declarations: [
    HistoricalPeriodListComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    HistoricalPeriodListComponent
  ]
})
export class HistoricalPeriodsModule {}
