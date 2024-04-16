// import { Component, OnInit } from '@angular/core';
// import { Person } from '../../models/person.model';
// import { PersonService } from '../../services/person.service';

// @Component({
//   selector: 'app-person-list',
//   templateUrl: './person-list.component.html',
//   styleUrls: ['./person-list.component.css']
// })
// export class PersonListComponent implements OnInit {
//   persons: Person[] = [];

//   constructor(private personService: PersonService) {}

//   ngOnInit() {
//     this.personService.getAllPersons().subscribe({
//       next: (persons) => this.persons = persons,
//       error: (err) => console.error('Failed to load persons', err)
//     });
//   }
// }