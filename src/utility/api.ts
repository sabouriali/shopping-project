import axios from "axios";

import { type Product } from "../types/productType";

type ProductsData = {
  data: Product[];
};

type SingleProductData = {
  data: Product;
};

type CategoriesData = {
  data: string[];
};

const Axios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getProducts(sort?: "asc" | "desc") {
  const { data }: ProductsData = await Axios.get(
    `/products${sort ? `?sort=${sort}` : ""}`
  );

  return data;
}

export async function getSingleProduct(id: number) {
  const { data }: SingleProductData = await Axios.get(`/products/${id}`);

  return data;
}

export async function getSingleCatProducts(cat: string, sort?: "asc" | "desc") {
  const { data }: ProductsData = await Axios.get(
    `/products/category/${cat}${sort ? `?sort=${sort}` : ""}`
  );

  return data;
}

export async function getProductCategories() {
  const { data }: CategoriesData = await Axios.get("/products/categories");

  return data;
}
