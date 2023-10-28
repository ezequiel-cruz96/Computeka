import { Component, signal } from '@angular/core';
import { Store } from '../store/store'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private store: Store
  ) { }

  productsCart = this.store.getItems();

  addCart(index:number){
    this.productsCart[index].count = this.productsCart[index].count+1;
 }

 restoreCart(index:number){
  if(this.productsCart[index].count >0){
    this.productsCart[index].count = this.productsCart[index].count-1;
  }
}

trash(id:number){
  let  index = this.productsCart.findIndex((product: { id: number; }) => product.id === id);
  if (index !== -1) {
    this.productsCart.splice(index, 1);
  }
}

formatedPrice(price :any) {
  return price.toLocaleString('es-ES', { style: 'currency', currency: 'ARS',minimumFractionDigits: 0,
  maximumFractionDigits: 0, });
}

}
