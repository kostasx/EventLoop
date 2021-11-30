// CR*D STORE
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const store = createStore(reducer);
let idCounter = 0;

function reducer( state = [] /* <-- Set initial state */, action ) {
  switch (action.type) {
    case "CREATE":
      return [...state, { id: ++idCounter, ...action.payload }];
    case "UPDATE":
      return state.map((post) => {
        if (post.id !== action.payload.id) {
          return post;
        }
        return { ...post, ...action.payload };
      });
    case "DELETE":
      return state.filter((post) => post.id !== action.payload.id);
    default:
      return state;
  }
}

const actions = {
  CREATE: (payload) => {
    return {
      type: "CREATE",
      payload
    };
  },
  UPDATE: (payload) => {
    return {
      type: "UPDATE",
      payload
    };
  },
  DELETE: (id) => {
    return {
      type: "DELETE",
      payload: { id }
    };
  }
};

store.subscribe(() => {
  console.log("Subscription => State:", store.getState());
});

// Dispatch by passing an Object:
store.dispatch({
  type: "CREATE",
  payload: {
    author: "Kyle Simpson",
    title: "YDKJS",
    content: "Coolest JS book ever!"
  }
});

// Organizing actions:
store.dispatch(
  actions.CREATE({
    author: "Kostas",
    title: "Redux Intro",
    content: "Redux content..."
  })
);
store.dispatch(
  actions.CREATE({
    author: "Hannah",
    title: "Math rocks!",
    content: "Ada Lovelace..."
  })
);
store.dispatch(actions.UPDATE({ id: 3, author: "Hannah Fry" }));
store.dispatch(actions.DELETE(1));

function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
