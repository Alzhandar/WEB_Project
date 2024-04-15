import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login/`, { username, password }).pipe(
      map(user => {
        user.username = username;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      })
    );
  }
  

  logout() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log("Loaded user:", user);  
    return user;
  }
  
}
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser: Observable<any>;

//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): any {
//     return this.currentUserSubject.value;
//   }

//   public getToken(): string {
//     return this.currentUserValue?.token; // Возвращаем токен текущего пользователя
//   }

//   login(username: string, password: string): Observable<any> {
//     return this.http.post<any>('/api/login', { username, password }).pipe(
//       map(user => {
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         this.currentUserSubject.next(user);
//         return user;
//       })
//     );
//   }

//   logout(): void {
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
// }
