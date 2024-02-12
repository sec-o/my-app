export interface Product {
  id: number;
  name: string;
  rating: number;
  description: string;
  fullDescription: string;
  price: number;
  condition: string;
  quantity: number;
  deliveryTime: number; // In days
  quantityInShoppingCart?: number;

  // Add other properties as needed
}
