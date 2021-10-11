import { AnyAction } from "redux";

const weatherReducer = (state = {} as any, action: AnyAction) => {
  switch (action.type) {
    case "ADD_WEATHER_DATA":
      return {
        ...state,
        history: [...state.history, action.weather],
      };
    case "RESET_WEATHER_DATA":
      return {
        ...state,
        history: [],
      };
    case "SET_REGION":
      return {
        ...state,
        region: action.region,
      };
    default:
      return { region: null, history: [] };
  }
};

export default weatherReducer;
