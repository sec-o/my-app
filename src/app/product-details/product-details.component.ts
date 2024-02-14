import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../mock-data.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: any;
  quantityArray?: number[];
  selectedQuantity: number = 1;
  quantityOfProductsInShoppingCart: number = 0;
  doesShoppingCartContainItems?: boolean;

  constructor(
    private route: ActivatedRoute,
    private mockDataService: MockDataService,
    private shoppingCartService: ShoppingCartService,
    private _notificationPopup: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id']; // The + before params declares it as a number and not a "string-number"
      this.mockDataService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
      this.quantityOfProductsInShoppingCart =
        this.shoppingCartService.getProducts().length;
      this.doesShoppingCartContainItems =
        this.shoppingCartService.doesShoppingCartContainProducts();
    });

    // Generate array of numbers based on product.quantity to use it in mat-select, limited to a maximum of 2
    const maxNumber = Math.min(this.product.quantity, 2);
    this.quantityArray = Array.from({ length: maxNumber }, (_, i) => i + 1);
  }

  addtoShoppingCart(product: Product): void {
    this.shoppingCartService.addToCart(product, this.selectedQuantity);
    this.quantityOfProductsInShoppingCart =
      this.shoppingCartService.getProducts().length;
    this._notificationPopup.open(
      product.name + ' added to your cart.',
      'Close',
      {
        duration: 2000,
        horizontalPosition: 'end',
      }
    );
    this.doesShoppingCartContainItems = true;
  }
}
