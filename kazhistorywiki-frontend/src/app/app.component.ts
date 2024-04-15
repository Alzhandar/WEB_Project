import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = 'Guest'; 

  constructor(
    private authService: AuthenticationService, 
    private router: Router,                   
    private changeDetectorRef: ChangeDetectorRef  
  ) {}

  ngOnInit() {
    this.updateUsername();  
  }

  updateUsername() {
    const user = this.authService.getCurrentUser();
    this.username = user && user.username ? user.username : 'Guest';
    this.changeDetectorRef.detectChanges(); 
  }

  logout() {
    this.authService.logout();             
    this.updateUsername();                 
    this.router.navigate(['/']);          
  }

  login() {
    this.router.navigate(['/login']);       
  }
}