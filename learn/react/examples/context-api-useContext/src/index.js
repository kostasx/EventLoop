import React, { useContext, useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/* >>> A) USING PROP DRILLING <<< */
import App from "./Props-Drilling"; // A) Using Prop Drilling
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); // A)

/* >>> B) USING THE CONTEXT API <<< */
const Context = createContext(); // B) Using Context API
// We create a "Context". You can think of this as a glocal State
// which can be shared across all Components. Every single Component
// can load this Context and either read or update a value. Note: we can also
// load the createContext method without object destructuring at the import level
// and use it like this: React.createContext();

// IMPORTING CONTEXT: See subitem.jsx + Context.jsx for an example of how we declare Context in
// an external file and import it in another.

function Parent() {
  // We create a state (getter and setter) for our Parent Component
  const [parentData, setParentData] = useState({
    counter: 0
  });

  // We must enclose our Component in the Context.Provider in order for the
  // enclosed Components to be able to access the Context data.
  return (
    <Context.Provider
      value={{ parentData: parentData, setParentData: setParentData }}
    >
      <section>
        <h1>Parent Data (counter): {parentData.counter}</h1>
        <Child />
      </section>
    </Context.Provider>
  );
}

function Child() {
  // We load the Context and use object destructuring to get back
  // the state getter (parentData) and the state setter (setParentData)
  const { parentData, setParentData } = useContext(Context);

  return (
    <section>
      {/* We can now access the Parent state from our Child Component */}
      <button
        onClick={() => setParentData({ counter: parentData.counter + 1 })}
      >
        Change Parent data from Child
      </button>
      <GrandChild />
    </section>
  );
}

function GrandChild() {
  // Load the Context
  const { parentData, setParentData } = useContext(Context);

  return (
    <section>
      {/* Change Parent Data via Context */}
      <button
        onClick={() => setParentData({ counter: parentData.counter + 1 })}
      >
        Change Parent data from GrandChild
      </button>
    </section>
  );
}
// ReactDOM.render(<Parent />, rootElement); // B)

console.clear();
