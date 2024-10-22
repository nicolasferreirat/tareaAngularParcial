import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  logout() {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }
}
