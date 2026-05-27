export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  isBestSeller: boolean;
  sizes: string[];
  colors: string[];
  description: string;
}

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  selectedSize: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
