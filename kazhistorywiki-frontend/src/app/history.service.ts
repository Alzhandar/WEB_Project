import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private baseUrl = 'http://127.0.0.1:8000/api'; // URL вашего API

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories/`);
  }

  getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/`);
  }
}
