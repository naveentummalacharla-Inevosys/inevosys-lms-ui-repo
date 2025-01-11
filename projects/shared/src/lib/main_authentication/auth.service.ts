import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  authentication() {
    const token = localStorage.getItem('Token');
    return !!token; // Return true if token exists
  }
  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJteWRvbWFpbi5jb20iLCJpYXQiOjE3MzQwODUyMTksImV4cCI6MTczNDA4ODgxOSwidXNlcklkIjoiMSIsInJvbGUiOiJBRE1JTiJ9.EQx6OD6J9wJE1WyUqdf7jeAoufYUpgnb-odNvjSeq5A';
      if (token) {
        localStorage.setItem('Token', token); 
        this.router.navigateByUrl('inventory'); 
      } else {
        this.router.navigateByUrl('login');
      }
    } else {
      alert('Invalid Credentials');
    }
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigateByUrl('login');
  }
}
