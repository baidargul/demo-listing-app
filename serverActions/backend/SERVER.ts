import { Product } from "./partials/products";

export type SERVER_RESPONSE = {
  status: number;
  message: string;
  data: any;
};

export const SERVER = {
  Product,
};
