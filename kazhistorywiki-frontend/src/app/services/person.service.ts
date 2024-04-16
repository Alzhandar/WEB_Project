import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://127.0.0.1:8000/api/persons'; 

  constructor(private http: HttpClient) {}

  getAllPersons(): Observable<Person[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Person[]>(this.apiUrl, { headers });
  }
}

