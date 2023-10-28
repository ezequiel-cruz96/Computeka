import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Store {

  constructor() { }

  items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
  }
  
  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }

}
