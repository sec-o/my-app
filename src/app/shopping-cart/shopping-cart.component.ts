import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  products: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private _notificationPopup: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.products = this.shoppingCartService.getProducts();

    // Calculate the total price of all products in the shopping cart
    for (const product of this.products) {
      this.totalPrice += product.price * (product.quantityInShoppingCart ?? 1);
    }
  }

  deleteProduct(product: Product) {
    this.shoppingCartService.deleteFromCart(product);
    this._notificationPopup.open(
      product.name + ' removed from your cart.',
      'Close',
      {
        duration: 2000,
        horizontalPosition: 'end',
      }
    );
    this.products = this.shoppingCartService.getProducts();
  }
}
