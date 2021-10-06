import { GoogleUser, Product } from "../types";
import { getFakeProduct } from "./product";
import { parseGoogleUser } from "./google";

interface ApiParams {
  limit: number;
}

export const fetchProducts = ({ limit }: ApiParams): Product[] => {
  return Array(limit).fill("").map(getFakeProduct);
};

export const fetchGoogleUser = async (
  token: string | undefined,
): Promise<GoogleUser> => {
  return fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`,
  )
    .then((res) => res.json())
    .then((data) => parseGoogleUser(data));
};
