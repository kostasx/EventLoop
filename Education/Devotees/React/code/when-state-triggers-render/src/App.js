import { useState } from 'react';
console.clear();

// Case 1) State changes to the same value:
let stateTestARenderCount = 0;
const StateTestA = ()=>{

  const [ state, setState ] = useState("a");

  console.log(`StateTestA() => render( ${++stateTestARenderCount} )`, "State: ", state);

  const handler = ()=> setState( prevState =>{
    // Is prev state diff? No. Then, don't re-render:
    console.log("StateTestA() => click => State is about to be changed:");
    console.log( "Previous State:", prevState, "New State: ", "a" );
    return "a"
  })
  return (
    <p>
      Current state: { state }
    <button onClick={handler}>StateTestA</button>
    </p>
  )

}

// Case 2) State changes to a new value once and then back to the same value:
let stateTestBRenderCount = 0;
const StateTestB = ()=>{

  const [ state, setState ] = useState("a");

  console.log(`StateTestB() => render( ${++stateTestBRenderCount} )`, "State: ", state);

  const handler = ()=> setState( prevState =>{
    console.log("StateTestB() => click => State is about to be changed:");
    console.log( "Previous State:", prevState, "New State: ", "b" );
    return "b"
  })
  return (
    <p>
      Current state: { state }
    <button onClick={handler}>StateTestB</button>
    </p>
  )

}

// Case 3) State changes on a new value every time: 
let stateTestCRenderCount = 0;
const StateTestC = ()=>{

  const [ state, setState ] = useState("a");

  console.log(`StateTestC() => render( ${++stateTestCRenderCount} )`, "State: ", state);

  const handler = ()=> setState( prevState =>{
    console.log("StateTestC() => click => State is about to be changed:");
    const newValue = Math.random();
    console.log( "Previous State:", prevState, "New State: ", newValue );
    return newValue;
  })
  return (
    <p>
      Current state: { state }
      <button onClick={handler}>StateTestC</button>
    </p>
  )

}

// Edge Case 4) State mutation SHOULD BE AVOIDED
let stateTestDRenderCount = 0;
const StateTestD = ()=>{

  const [ state, setState ] = useState({ value: 0 });

  console.log(`StateTestD() => render( ${++stateTestDRenderCount} )`, "State: ", state);

  const handler = ()=> setState( prevState =>{
    console.log("StateTestD() => click => State is about to be changed:");
    const newValue = Math.random();
    console.log( "Previous State:", JSON.stringify(prevState), "New State: ", JSON.stringify({ value: newValue }) );
    state.value = newValue;
    // React compares previous and next state using Object.is()
    return state; // <= AVOID THIS! You should ALWAYS return a new Object/Array.
    // return { ...state, value: newValue }
  })
  return (
    <p>
      Current state: { state.value }
      <button onClick={handler}>StateTestD</button>
    </p>
  )

}

export default function App() {
  return (
    <>
      <StateTestA />
      <StateTestB />
      <StateTestC />
      <StateTestD />
    </>
  );
}
