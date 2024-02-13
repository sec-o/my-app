import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cachedProducts: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>([]);

  constructor() {}

  getProducts(): Product[] {
    return this.cachedProducts;
  }

  addToCart(product: Product, quantity: number): void {
    // Initialize undefined property "quantityInShoppingCart"
    if (!product.quantityInShoppingCart)
      product.quantityInShoppingCart = quantity;

    if (this.cachedProducts.find((product1) => product1.id === product.id)) {
      const productIndex = this.cachedProducts.findIndex(
        (product1) => product1.id === product.id
      );
      // Update "quantityInShoppingCart" with +1 if product already in shopping cart (limit of max. 2 per product)
      const quantity1 =
        this.cachedProducts[productIndex].quantityInShoppingCart;
      if (quantity1)
        if (quantity1 === 0) {
          this.cachedProducts[productIndex].quantityInShoppingCart =
            quantity1 + quantity;
        }
      if (quantity1 === 1) {
        this.cachedProducts[productIndex].quantityInShoppingCart =
          quantity1 + 1;
      }
    } else this.cachedProducts.push(product);
    this.productsSubject.next(this.cachedProducts);
  }

  deleteFromCart(product: Product) {
    if (this.cachedProducts.find((product1) => product1.id === product.id)) {
      this.cachedProducts = this.cachedProducts.filter(
        (product1) => product1.id !== product.id
      );
    }
    this.productsSubject.next(this.cachedProducts);
  }

  clearCart(): void {
    this.cachedProducts = [];
    this.productsSubject.next(this.cachedProducts);
  }

  doesShoppingCartContainProducts(): any {
    if (this.cachedProducts.length) return true;
  }
}
