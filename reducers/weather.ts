import { AnyAction } from "redux";

const weatherReducer = (state = {} as any, action: AnyAction) => {
  switch (action.type) {
    case "ADD_WEATHER_DATA":
      const { weather, region } = action.payload;
      return {
        ...state,
        history: {
          ...state.history,
          [region]: [...state.history[region], weather],
        },
      };
    case "ADD_REGION":
      return action.payload in state.history
        ? state
        : {
            ...state,
            history: {
              ...state.history,
              [action.payload]: [],
            },
          };
    default:
      return { history: {} };
  }
};

export default weatherReducer;
