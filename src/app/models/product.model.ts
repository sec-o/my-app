export interface Product {
  //
  // NOTE
  // id number is required one the data comes from a webserver.
  //
  // id: number;
  name: string;
  rating: number;
  description: string;
  fullDescription: string;
  price: number;
  condition: string;
  inStock: boolean;
  deliveryTime: number; // In days

  // Add other properties as needed
}
