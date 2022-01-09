import React, { useContext } from "react";
import Context from "./Context";

export default function Subitem() {
  const { parentData, setParentData } = useContext(Context);

  return (
    <>
      <p>Subitem</p>
      <button onClick={() => setParentData({ counter: Math.random() })}>
        Click to Change Parent
      </button>
    </>
  );
}
