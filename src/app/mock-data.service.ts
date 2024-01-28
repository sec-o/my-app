import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../app/models/product.model';

@Injectable({
  providedIn: 'root',
})

// NOTE
// this data-service mocks a real server with data to work with.
// later you should configure a real one if you want to connect with a database from the web.
//
export class MockDataService {
  private products: Product[] = [
    {
      name: 'Apple iPhone 18',
      rating: 5,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 1000,
      condition: 'new',
      inStock: true,
      deliveryTime: 1,
    },
    {
      name: 'Samsung Galaxy S35',
      rating: 4,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 900,
      condition: 'new',
      inStock: true,
      deliveryTime: 1,
    },
    {
      name: 'Sony Xperia 9',
      rating: 3.5,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 800,
      condition: 'new',
      inStock: true,
      deliveryTime: 3,
    },
    {
      name: 'LG G 16',
      rating: 3,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 500,
      condition: 'new',
      inStock: true,
      deliveryTime: 3,
    },
    {
      name: 'Nokia 14',
      rating: 3,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 300,
      condition: 'new',
      inStock: true,
      deliveryTime: 2,
    },
    {
      name: 'Motorola Razr',
      rating: 4,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 450,
      condition: 'new',
      inStock: true,
      deliveryTime: 2,
    },
    // Add more products as needed
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
