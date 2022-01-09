// (Work in progress)
import "./styles.css";
import ReactDOM from "react-dom";
import { createContext, useState, useContext } from "react";
// createContext: used to create the Context.Provider and Context.Consumer Components
// useContext: Hook for accessing the Context.Provider value
const MyContext = createContext();
// ALT SYNTAX:
// const { Provider, Consumer } = MyContext;
const ContextValue = { counter: 0 };
console.clear();

function Child() {
  const { counter } = useContext(MyContext);
  return (
    <div className="child">
      <h3>Child</h3>
      <p>{counter}</p>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  return (
    <MyContext.Consumer>
      {(contextValue) => {
        return (
          <div 
            className="grandchild" 
            onClick={() => contextValue.setCounter(contextValue.counter + 1)}>
            <h3>GrandChild</h3>
            {contextValue.counter}
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <MyContext.Provider value={{ counter, setCounter }}>
      <div className="parent">
        <h3>Parent counter: {counter}</h3>
        <Child />
        <Child />
      </div>
    </MyContext.Provider>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
