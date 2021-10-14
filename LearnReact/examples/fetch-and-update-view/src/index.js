import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

function App() {
  const [options, setOptions] = useState([]);

  useEffect(function componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((res) => res.json())
      .then((data) => {
        const emails = data.slice(0, 3).map((post) => {
          return (
            <option key={post.id} value={post.email} children={post.email} />
          );
        });
        setOptions(emails);
      });
  }, []);

  return (
    <select>
      {options.map((option) => {
        return option;
      })}
    </select>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
