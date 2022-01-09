import React, { useState } from "react";

function Parent() {
  // We create a state (getter and setter) for our Parent Component
  const [parentData, setParentData] = useState({
    counter: 0
  });

  // We must enclose our Component in the Context.Provider in order for the
  // enclosed Components to be able to access the Context data.
  return (
    <section>
      <h1>Parent Component Data (counter): {parentData.counter}</h1>
      <Child parentData={parentData} setParentData={setParentData} />
    </section>
  );
}

function Child(props) {
  return (
    <section>
      {/* We can now access the Parent state from our Child Component */}
      <button
        onClick={() =>
          props.setParentData({ counter: props.parentData.counter + 1 })
        }
      >
        Change Parent data from Child
      </button>
      <GrandChild
        parentData={props.parentData}
        setParentData={props.setParentData}
      />
    </section>
  );
}

function GrandChild(props) {
  return (
    <section>
      <button
        onClick={() =>
          props.setParentData({ counter: props.parentData.counter + 1 })
        }
      >
        Change Parent data from GrandChild
      </button>
    </section>
  );
}

export default Parent;
