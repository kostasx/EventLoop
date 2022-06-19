import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const Child = ()=>{
  console.log("Child() => render");
  const ctxState = useContext(Context); // <= This will always trigger a re-render even if the Component has been React.memoized
  return <p>Child {ctxState}</p>
}
const ChildMemo = React.memo(Child); 

export default function App() {
  const [ state, setState ] = useState(0);
  return (
    <>
      <h2>Parent</h2>
      <button onClick={()=> setState(state+1)}>Update Parent state</button>
      <Context.Provider value={ state }>
        <ChildMemo />
      </Context.Provider>  
    </>
  );
}
