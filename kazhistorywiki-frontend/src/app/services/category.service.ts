import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from '../models/category.model'; 
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://127.0.0.1:8000/api/categories';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    const token = localStorage.getItem('token'); 
    console.log('Using token: ', token); 
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`  
    });
  
    return this.http.get<Category[]>(this.apiUrl, { headers }).pipe(
      tap(data => console.log('Fetched categories:', data)),
      catchError(this.handleError<Category[]>('getAllCategories', []))
    );
  }

  getCategoryById(id: number): Observable<Category> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Category>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(this.handleError<Category>('getCategoryById'))
    );
  }

  createCategory(category: Category): Observable<Category> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<Category>(this.apiUrl, category, { headers }).pipe(
      catchError(this.handleError<Category>('createCategory'))
    );
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.put<Category>(`${this.apiUrl}/${id}`, category, { headers }).pipe(
      catchError(this.handleError<Category>('updateCategory'))
    );
  }

  deleteCategory(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(this.handleError<void>('deleteCategory'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  getPersonsByCategory(categoryId: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/persons/?category_id=${categoryId}`);
  }
}
