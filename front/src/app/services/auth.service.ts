import { inject, Injectable } from '@angular/core';
import { FetchService } from './fetch.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fetchService = inject(FetchService);

  async login(username: string, contraseña: string): Promise<boolean> {
    try {
      const body = JSON.stringify({ username, contraseña });
      const response = await this.fetchService.post<{ token: string }>(
        'auth/',
        body
      );
      this.fetchService.setToken(response.token);
      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  }

  logOut(): void {
    this.fetchService.setToken('');
  }

  isAuthenticated(): boolean {
    return this.fetchService.loggedUser();
  }
  constructor() {}
}
