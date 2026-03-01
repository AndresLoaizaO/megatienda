import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private STORAGE_KEY = 'users';
  private AUTH_KEY = 'authUser';

  constructor() {
    const users = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');

    if (users.length === 0) {
      const admin = {
        fullName: 'Admin Principal',
        email: 'admin@admin.com',
        username: 'admin',
        password: '1234',
        role: 'admin',
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([admin]));
    }
  }

  getCurrentUserRole(): string {
  const user = this.getCurrentUser();
  return user?.role || '';
}

  register(
    fullName: string,
    email: string,
    username: string,
    password: string,
  ): boolean {
    const users = this.getUsers();

    // verificar si ya existe el usuario
    const userExists = users.find((u) => u.username === username);

    if (userExists) {
      return false; // usuario ya existe
    }

    const newUser = {
      fullName,
      email,
      username,
      password,
      role: 'user',
    };

    users.push(newUser);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));

    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();

    const user = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (!user) return false;

    localStorage.setItem(this.AUTH_KEY, JSON.stringify(user));
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.AUTH_KEY);
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem(this.AUTH_KEY)!);
  }

  private getUsers(): any[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }
}
