import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router  
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      user => {
        console.log("Login successful", user);
        this.router.navigate(['/']); 
      },
      error => {
        this.errorMessage = "Login failed: " + error.message;
        console.error("Login error", error);
      }
    );
  }
}
