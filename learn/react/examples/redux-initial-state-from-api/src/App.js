import { useEffect } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
console.clear();

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

function App() {
  // https://react-redux.js.org/tutorials/quick-start#use-redux-state-and-actions-in-react-components
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  // Upon render, fetch from the API and update the Redux state
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((payload) => {
        dispatch({ type: "WRITE", payload });
      })
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      {transactions.slice(0, 5).map((tx) => {
        return (
          <p key={tx.id}>
            <strong>{tx.title}</strong> | {tx.price}
          </p>
        );
      })}
    </div>
  );
}

// Wrap our <App /> with a Redux <Provider />
export default function AppWithStore() {
  // <Provider /> https://react-redux.js.org/introduction/getting-started#provider
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// Fake Products JSON: https://fakestoreapi.com/products/
