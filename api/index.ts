import { Product } from "../types";
import { getFakeProduct } from "./product";

interface ApiParams {
  limit: number;
}

export const fetchProducts = ({ limit }: ApiParams): Product[] => {
  return Array(limit).fill("").map(getFakeProduct);
};
