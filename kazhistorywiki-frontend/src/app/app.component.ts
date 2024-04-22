import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import {HomeComponent} from "./home/home-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = 'Guest';  

  constructor(
    private authService: AuthenticationService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUserValue.subscribe(user => {
      this.username = user && user.username ? user.username : 'Guest';
    });
  }

  logout() {
    this.authService.logout();             
    this.router.navigate(['/']);  
  }

  login() {
    this.router.navigate(['/login']);
  }
}
