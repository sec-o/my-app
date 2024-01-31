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
  }
}
