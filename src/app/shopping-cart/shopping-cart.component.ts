import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  products: Product[] = [];
  productQuantityInCart?: number;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.products = this.shoppingCartService.getProducts();
  }
}
