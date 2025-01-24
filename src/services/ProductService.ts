import { safeParse } from "valibot";
import {
  DraftProductSchema,
  Product,
  ProductSchema,
  ProductsSchema,
} from "../types";
import axios from "axios";
import { stringToBoolean } from "../utils";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else throw new Error("Datos no válidos");
  } catch (error) {
    console.error(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios.get(url);
    const result = safeParse(ProductsSchema, data.data);
    if (result.success) return result.output;
    else throw new Error("Ocurrió un error en la petición");
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios.get(url);
    const result = safeParse(ProductSchema, data.data);
    if (result.success) return result.output;
    else throw new Error("Ocurrió un error en la petición");
  } catch (error) {
    console.error(error);
  }
}

export async function updateProduct(data: ProductData, id: Product["id"]) {
  try {
    const { name, price, availability } = data;
    const result = safeParse(ProductSchema, {
      id,
      name,
      price: +price,
      availability: stringToBoolean(availability.toString()),
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      await axios.put(url, result.output);
    } else throw new Error("Datos no válidos");
  } catch (error) {
    console.error(error);
  }
}
