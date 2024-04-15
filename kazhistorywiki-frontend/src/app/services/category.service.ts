import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from '../models/category.model'; 

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://127.0.0.1:8000/api/categories';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl).pipe(
      tap(data => console.log('Fetched categories:', data)), 
      catchError(this.handleError<Category[]>('getAllCategories', [])) 
    );
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<Category>('getCategoryById'))
    );
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category).pipe(
      catchError(this.handleError<Category>('createCategory'))
    );
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${id}`, category).pipe(
      catchError(this.handleError<Category>('updateCategory'))
    );
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<void>('deleteCategory'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthenticationService } from './authentication.service'; // Убедитесь, что путь к AuthenticationService корректный

// @Injectable({
//   providedIn: 'root'
// })
// export class CategoryService {
//   private apiUrl = 'http://127.0.0.1:8000/api/categories/';

//   constructor(private http: HttpClient, private authService: AuthenticationService) {}

//   getAllCategories(): Observable<any> {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Authorization': `Bearer ${this.authService.getToken()}` // Получение токена для аутентификации запроса
//       })
//     };
//     return this.http.get<any>(this.apiUrl, httpOptions);
//   }
// }
