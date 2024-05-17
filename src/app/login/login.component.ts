import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}


  login(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post<{ status: string }>('http://127.0.0.1:3000/registerDetails', loginData).subscribe(
      (resultData) => {
        console.log(resultData);
        if (resultData.status === 'register') {
          // Redirect to MongoDB or any other desired location
          this.router.navigate(['/register']);
        } else {
          alert('Incorrect email or password');
          console.log('Error logging in');
        }
      },
      (error) => {
        console.log('Error:', error);
        alert('An error occurred while logging in');
      }
    );
  }
}