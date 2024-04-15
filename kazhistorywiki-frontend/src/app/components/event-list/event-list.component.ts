// // src/app/components/event-list/event-list.component.ts
// import { Component, OnInit } from '@angular/core';
// import { EventService } from '../../services/event.service';
// import { Event } from '../../models/event.model';

// @Component({
//   selector: 'app-event-list',
//   templateUrl: './event-list.component.html',
//   styleUrls: ['./event-list.component.css']
// })
// export class EventListComponent implements OnInit {
//   events: Event[] = [];

//   constructor(private eventService: EventService) {}

//   ngOnInit() {
//     this.eventService.getAllEvents().subscribe({
//       next: (data) => {
//         this.events = data;
//       },
//       error: (err) => {
//         console.error('Failed to get events', err);
//       }
//     });
//   }
// }
