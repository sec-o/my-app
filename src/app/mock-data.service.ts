import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../app/models/product.model';

@Injectable({
  providedIn: 'root',
})

// NOTE
// This data-service mocks a real server with data to work with.
// Later you should configure a real one which connects to a database from the web.
//
export class MockDataService {
  private products: Product[] = [
    {
      id: 1000,
      name: 'Smartphone Glass C18',
      rating: 5,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 1000,
      condition: 'new',
      quantity: 1000,
      deliveryTime: 1,
    },
    {
      id: 1001,
      name: 'Smartphone Universe L35',
      rating: 4,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 900,
      condition: 'new',
      quantity: 1000,
      deliveryTime: 1,
    },
    {
      id: 1002,
      name: 'Smartphone Ocean XYZ9',
      rating: 3.5,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 800,
      condition: 'new',
      quantity: 1000,
      deliveryTime: 3,
    },
    {
      id: 1003,
      name: 'Smartphone Earth 16',
      rating: 3,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 500,
      condition: 'new',
      quantity: 0,
      deliveryTime: 3,
    },
    {
      id: 1004,
      name: 'Smartphone Wind ABC14',
      rating: 3,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 300,
      condition: 'new',
      quantity: 0,
      deliveryTime: 2,
    },
    {
      id: 1005,
      name: 'Smartphone Water 54',
      rating: 4,
      description: 'Put your product description here. This is just a sample.',
      fullDescription:
        'Brand new product. Comes with lots of extras and a stylish package. If necessary, add more product description here. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example. This is only an example.',
      price: 450,
      condition: 'new',
      quantity: 1000,
      deliveryTime: 2,
    },
    // Add more products as needed
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
}
