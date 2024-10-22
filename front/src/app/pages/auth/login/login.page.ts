import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  username!: string;
  password!: string;
  errorMessage: string = '';

  async login() {
    const response = await this.authService.login(this.username, this.password);
    if (response) {
      await this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Las credenciales son incorrectas';
    }
  }
}
