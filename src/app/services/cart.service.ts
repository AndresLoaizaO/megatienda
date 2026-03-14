import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) {}

  // obtener carrito
  getCart(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  updateCartCount(count: number) {
    this.cartCount.next(count);
  }

  // agregar producto

  addToCart(productId: number, quantity: number){

  return this.http.post(`${this.apiUrl}/add`, {
    productId: productId,
    quantity: quantity
  }).pipe(
    tap(() => {

      this.getCart().subscribe(cart => {

        const totalItems = cart.reduce((sum:any,item:any)=> sum + item.quantity,0);

        this.updateCartCount(totalItems);

      });

    })
  );

}
  // eliminar producto
  removeFromCart(productId: number) {
    return this.http.delete(`${this.apiUrl}/remove/${productId}`);
  }

  // vaciar carrito
  clearCart() {
    return this.http.delete(`${this.apiUrl}/clear`);
  }
}
