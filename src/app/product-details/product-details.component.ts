import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: any;
  quantityArray?: number[];
  selectedQuantity?: number = 1;

  constructor(
    private route: ActivatedRoute,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id']; // The + before params declares it as a number and not a "string-number"
      this.mockDataService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    });

    // Generate array of numbers based on product.quantity to use it in mat-select, limited to a maximum of 5
    const maxNumber = Math.min(this.product.quantity, 5);
    this.quantityArray = Array.from({ length: maxNumber }, (_, i) => i + 1);
  }
}
