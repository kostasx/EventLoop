import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

function reducer(state = { balance: 0 }, action) {
  if (action.type === "inc") {
    state.balance += action.payload;
    return { ...state };
  }
  return state;
}

const store = createStore(reducer);

function App() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
        Increment Balance {balance}
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
