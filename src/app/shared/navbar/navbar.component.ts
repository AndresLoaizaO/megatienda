import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchText: string = '';

  constructor(
    public cartService: CartService,
    public authService: AuthService,
    private router: Router,
  ) {}

  search() {
    if (!this.searchText.trim()) return;

    this.router.navigate(['/catalogo'], {
      queryParams: { q: this.searchText },
    });

    this.searchText = '';
  }

  isAdmin(): boolean {
    return this.authService.userRole === 'ADMIN';
  }
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/catalogo']);
  }
}
