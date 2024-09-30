import axios from "axios";

import { type CartItem } from "../types/productType";
import { type User } from "../types/userType";
import {
  type CategoriesData,
  type CheckoutData,
  type LoginData,
  type ProductsData,
  type SignupData,
  type SingleProductData,
} from "../types/dataTypes";

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

export async function checkoutHandler(userId: string, products: CartItem[]) {
  const { data }: CheckoutData = await Axios.post(
    "/carts",
    {
      userId,
      date: Date.now,
      products,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}

export async function loginHandler(username: string, password: string) {
  const { data }: LoginData = await Axios.post(
    "/auth/login",
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}

export async function signupHandler({
  email,
  username,
  password,
  name: { firstname, lastname },
  address: {
    city,
    street,
    number,
    zipcode,
    geolocation: { lat, long },
  },
  phone,
}: User) {
  const { data }: SignupData = await Axios.post(
    "/users",
    {
      email,
      username,
      password,
      name: {
        firstname,
        lastname,
      },
      address: {
        city,
        street,
        number,
        zipcode,
        geolocation: {
          lat,
          long,
        },
      },
      phone,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}
