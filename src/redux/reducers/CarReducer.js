import { GET_ALL_CARS } from "../actions";
import cars from "../../models/car";

// initial state
const INITIAL_STATE = {
  cars,
  branches: ["mumbai"],
};

// CarReducer
const CarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CARS:
      return {
        ...state.cars,
      };

    default: {
      return state;
    }
  }
};

export default CarReducer;
