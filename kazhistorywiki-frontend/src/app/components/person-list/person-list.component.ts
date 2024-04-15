// src/app/components/person-list/person-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getAllPersons().subscribe({
      next: (data) => {
        this.persons = data;
      },
      error: (err) => {
        console.error('Failed to get persons', err);
      }
    });
  }
}
