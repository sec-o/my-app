export interface Product {
  id: number;
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
