import { AnyAction } from "redux";
import { GoogleUser } from "../types";

const googleUserReducer = (state = {} as GoogleUser, action: AnyAction) => {
  switch (action.type) {
    case "SIGNIN":
      return action.googleUser;
    case "SIGNOUT":
      return {} as GoogleUser;
    default:
      return {} as GoogleUser;
  }
};

export default googleUserReducer;
