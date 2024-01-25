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
      price: 1000,
    },
    {
      name: 'Samsung Galaxy S35',
      rating: 4,
      description: 'Put your product description here. This is just a sample.',
      price: 900,
    },
    {
      name: 'Sony Xperia 9',
      rating: 3.5,
      description: 'Put your product description here. This is just a sample.',
      price: 800,
    },
    {
      name: 'LG G 16',
      rating: 3,
      description: 'Put your product description here. This is just a sample.',
      price: 500,
    },
    {
      name: 'Nokia 14',
      rating: 3,
      description: 'Put your product description here. This is just a sample.',
      price: 300,
    },
    {
      name: 'Motorola Razr',
      rating: 4,
      description: 'Put your product description here. This is just a sample.',
      price: 450,
    },
    // Add more products as needed
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
