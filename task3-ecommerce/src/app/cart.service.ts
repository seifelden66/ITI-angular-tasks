import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  currentCartItems = this.cartItems.asObservable();

  constructor() { }

  addToCart(product: any) {
    const existingItem = this.cartItems.getValue().find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      product.quantity = 1; 
      this.cartItems.next([...this.cartItems.getValue(), product]);
    }
    this.cartItems.next(this.cartItems.getValue()); 
  }

  removeFromCart(productId: number) {
    const updatedCart = this.cartItems.getValue().filter(item => item.id !== productId);
    this.cartItems.next(updatedCart);
  }

  getCartTotal(): number {
    const cartItems = this.cartItems.getValue();
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
