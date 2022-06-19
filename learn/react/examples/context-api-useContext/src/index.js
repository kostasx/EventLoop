import { createRoot } from 'react-dom/client';
import "./styles.css";

/* >>> A) USING PROP DRILLING <<< */
import PropsDrilling from "./Props-Drilling"; 

/* >>> B) USING CONTEXT API <<< */
// import ContextSetup from "./ContextSetup";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<PropsDrilling /> );   // A)
// rootElement.render(<ContextSetup /> ); // B)

console.clear();
