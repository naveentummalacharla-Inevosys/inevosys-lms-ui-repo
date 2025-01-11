import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../shared/src/lib/main_authentication/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loginForm = this.form();
    localStorage.removeItem('Token');
  }

  authService = inject(AuthService);

  title = 'login';
  loginForm!: FormGroup;

  form = () => {
    return new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  };

  submitLoginForm = () => {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      );
    } else {
      Object.keys(this.loginForm.controls).forEach((controls) => {
        const control = this.loginForm.get(controls);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  };
}
