import { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./ReduxStore";
console.clear();

function App() {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

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

export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
