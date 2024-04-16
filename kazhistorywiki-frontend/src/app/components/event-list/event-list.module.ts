import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [EventListComponent]
})
export class EventListModule {}