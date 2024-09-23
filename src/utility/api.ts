import axios from "axios";

import { type Product } from "../types/productType";

type ProductsData = {
  data: Product[];
};

type SingleProductData = {
  data: Product;
};

const Axios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getProducts() {
  const { data }: ProductsData = await Axios.get("/products");

  return data;
}

export async function getSingleProduct(id: number) {
  const { data }: SingleProductData = await Axios.get(`/products/${id}`);

  return data;
}
