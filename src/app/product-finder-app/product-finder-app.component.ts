import { Component } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'product-finder-app',
  templateUrl: './product-finder-app.component.html',
  styleUrls: ['./product-finder-app.component.css'],
})
export class ProductFinderAppComponent {
  products: any;
  customerProductSearchInput = '';
  searchingForProduct = false;
  foundProducts: any = [];
  showErrorScreen = false;
  isCardView = true;

  constructor(private mockDataService: MockDataService) {
    this.mockDataService.getProducts().subscribe((allProducts) => {
      this.products = allProducts;
    });
  }

  searchProduct() {
    this.foundProducts = [];
    this.showErrorScreen = false;
    this.searchingForProduct = true;

    // Split the customer product search input into individual words
    const searchQuery = this.customerProductSearchInput
      .toLowerCase()
      .split(' ');

    // Check if any of the individual words match with a product
    for (const product of this.products) {
      if (
        product.name
          .toLowerCase()
          .split(' ')
          .some((word: string) => searchQuery.includes(word))
      ) {
        this.foundProducts.push(product);
      }
    }
    if (this.foundProducts.length === 0) this.showErrorScreen = true;
  }

  resetProductSearch() {
    this.customerProductSearchInput = '';
    this.searchingForProduct = false;
    this.foundProducts = [];
    this.showErrorScreen = false;
  }

  clearField() {
    if (!this.customerProductSearchInput) {
      this.resetProductSearch();
    }
  }

  // Toggle product view between cards and list
  toggleView() {
    this.isCardView = !this.isCardView;
  }

  onRatingClicked(rating: number): void {
    // TODO: Handle the rating clicked event (save the rating to the backend when making a product review)
    console.log(`User rated the article with ${rating} stars.`);
  }
}
