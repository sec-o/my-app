import { Component } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'product-finder-app',
  templateUrl: './product-finder-app.component.html',
  styleUrls: ['./product-finder-app.component.css'],
})
export class ProductFinderAppComponent {
  products: any;
  customerProductSearch = '';
  searchingForProduct = false;
  foundProducts: any = [];
  doesSearchMatchWithProduct = false;
  showErrorScreen = false;

  constructor(private mockDataService: MockDataService) {
    this.mockDataService.getProducts().subscribe((allProducts) => {
      this.products = allProducts;
    });
  }

  searchProduct() {
    this.showErrorScreen = false;

    this.searchingForProduct = true;

    for (const product of this.products) {
      if (
        this.customerProductSearch.toLowerCase() === product.name.toLowerCase()
      ) {
        this.doesSearchMatchWithProduct = true;
        this.foundProducts.push(product);
      }
    }
    if (this.doesSearchMatchWithProduct === false) this.showErrorScreen = true;
  }

  resetProductSearch() {
    this.customerProductSearch = '';
    this.searchingForProduct = false;
    this.foundProducts = [];
    this.doesSearchMatchWithProduct = false;
    this.showErrorScreen = false;
  }

  clearField() {
    if (!this.customerProductSearch) {
      this.resetProductSearch();
    }
  }

  onRatingClicked(rating: number): void {
    // Handle the rating clicked event, e.g., save the rating to the backend.
    console.log(`User rated the article with ${rating} stars.`);
  }
}
