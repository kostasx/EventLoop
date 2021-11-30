import { createStore } from "redux";

// Basic Redux Store Setup >>
const initialState = {
  transactions: [{ id: 1, name: "YDKJS" }]
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WRITE":
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};
const store = createStore(storeReducer);
// << Basic Redux Store Setup

export default store;
