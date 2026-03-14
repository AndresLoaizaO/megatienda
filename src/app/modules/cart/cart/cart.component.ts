import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any[] = [];
  subtotal:number = 0;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.loadCart();
  }

  loadCart(){
    this.cartService.getCart().subscribe(cart=>{

  this.cartItems = cart;

  const totalItems = cart.reduce((sum:any,item:any)=> sum + item.quantity,0);

  this.cartService.updateCartCount(totalItems);

});
  }

  calculateSubtotal(){
    this.subtotal = 0;

    this.cartItems.forEach(item=>{
      this.subtotal += item.quantity;
    });
  }

  increase(item:any){
    const newQuantity = item.quantity + 1;

    this.cartService.addToCart(item.productId, newQuantity)
    .subscribe(()=> this.loadCart());
  }

  decrease(item:any){
    if(item.quantity > 1){
      const newQuantity = item.quantity - 1;

      this.cartService.addToCart(item.productId, newQuantity)
      .subscribe(()=> this.loadCart());
    } else {
      this.remove(item.productId);
    }
  }

  remove(productId:number){
    this.cartService.removeFromCart(productId).subscribe(()=>{
      this.cartService.getCart().subscribe(cart=>{

      this.cartService.updateCartCount(cart.length);
  });
  });
}}