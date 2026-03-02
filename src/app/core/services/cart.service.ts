import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private STORAGE_KEY = 'cart';

  // Obtener carrito
  getCart(): any[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  // Guardar carrito
  private saveCart(cart: any[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
  }

  // Agregar producto
  addToCart(product: any) {
    const cart = this.getCart();
    const existing = cart.find(p => p.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    this.saveCart(cart);
  }

  // Eliminar producto
  removeItem(id: number) {
    const cart = this.getCart().filter(p => p.id !== id);
    this.saveCart(cart);
  }

  // Actualizar cantidad
  updateQuantity(id: number, change: number) {
    const cart = this.getCart();
    const item = cart.find(p => p.id === id);

    if (item) {
      item.quantity += change;

      if (item.quantity <= 0) {
        this.removeItem(id);
        return;
      }
    }

    this.saveCart(cart);
  }

  // Subtotal
  getSubtotal(): number {
    return this.getCart()
      .reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Total de productos
  getTotalItems(): number {
    return this.getCart()
      .reduce((total, item) => total + item.quantity, 0);
  }
}