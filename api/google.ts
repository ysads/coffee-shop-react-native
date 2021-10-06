import { GoogleUser } from "../types";

export const parseGoogleUser = (res: any): GoogleUser => {
  return {
    email: res.email,
    name: `${res.given_name} ${res.family_name}`,
    picture: res.picture,
  };
};
