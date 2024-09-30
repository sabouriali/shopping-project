import { type Product, type CartItem } from "./productType";

export type ProductsData = {
  data: Product[];
};

export type SingleProductData = {
  data: Product;
};

export type CategoriesData = {
  data: string[];
};

export type LoginData = {
  data: { token: string };
};

export type CheckoutData = {
  data: {
    id: number;
    products: CartItem[];
    userId: string;
  };
};

export type SignupData = {
  data: { id: number };
};
