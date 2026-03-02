import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import {ComunicacionService} from '../../services/communication-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchText: string = '';

  constructor(
    public cartService: CartService,
    public authService: AuthService,
    private router: Router,
    private comunicacionService: ComunicacionService
  ) {}

  search() {
    if (this.searchText.trim()) {
      this.comunicacionService.enviarBusqueda(this.searchText);
    }
    if (!this.searchText.trim() || this.searchText.length < 4) return;
    this.comunicacionService.enviarBusqueda(this.searchText);
    // this.router.navigate(['/catalogo'], {
    //   queryParams: { q: this.searchText }
    // });

    // this.searchText = '';
  }

  isAdmin(): boolean {
    return this.authService.getCurrentUserRole() === 'admin';
  }

}
