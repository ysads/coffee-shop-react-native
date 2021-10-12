import { AnyAction } from "redux";
import { GoogleUser } from "../types";

const googleUserReducer = (state = {} as GoogleUser, action: AnyAction) => {
  switch (action.type) {
    case "SIGNIN":
      return action.googleUser;
    default:
      return state;
  }
};

export default googleUserReducer;
