import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoricalPeriod } from '../models/historical-period.model'; // Путь к модели данных

@Injectable({
  providedIn: 'root'
})
export class HistoricalPeriodService {
  private apiUrl = 'http://127.0.0.1:8000/api/historical_periods/'; // URL к вашему API

  constructor(private http: HttpClient) {}

  // Получение всех исторических периодов
  getHistoricalPeriods(): Observable<HistoricalPeriod[]> {
    return this.http.get<HistoricalPeriod[]>(this.apiUrl);
  }

  // Получение исторического периода по ID
  getHistoricalPeriodById(id: number): Observable<HistoricalPeriod> {
    return this.http.get<HistoricalPeriod>(`${this.apiUrl}/${id}`);
  }
}
