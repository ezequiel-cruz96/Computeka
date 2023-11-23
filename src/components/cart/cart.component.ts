import { Component } from '@angular/core';
import { Store } from '../store/store';

import { GetProductsService } from 'src/app/get-products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private store: Store, private servicio: GetProductsService) {}

  productsCart = this.store.getItems();

  addCart(index: number) {
    this.productsCart[index].count = this.productsCart[index].count + 1;
  }

  restoreCart(index: number) {
    if (this.productsCart[index].count > 0) {
      this.productsCart[index].count = this.productsCart[index].count - 1;
    }
  }

  trash(id: number) {
    let index = this.productsCart.findIndex(
      (product: { id: number }) => product.id === id
    );
    if (index !== -1) {
      this.productsCart.splice(index, 1);
    }
  }

  formatedPrice(price: any) {
    return price.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  phoneUser = '';

  buyProducts() {
    let getProductsCart = this.productsCart.map((objeto) => objeto.name);

    let productFinal = {
      name: getProductsCart,
      phone: this.phoneUser,
    };

    this.servicio.sendMessage(productFinal).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }
}
