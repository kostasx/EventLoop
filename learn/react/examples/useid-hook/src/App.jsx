import { useId } from 'react';
console.clear();

// Without useId()
function MyForm({ title }){
  return (
    <form>
      <h4>{ title }</h4>
      <p>
        <label htmlFor="email">Email: </label>
        <input id="email" type="text"/>
      </p>
      <p>
        <label htmlFor="password">Password: </label>
        <input id="password" type="password"/>
      </p>
      <button>Submit</button>
    </form>
  )
}

// With useId()
function SafeMyForm({ title }){
  const emailId = useId();
  const passId = useId();
  return (
    <form>
      <h4>{ title }</h4>
      <p>
        <label htmlFor={ emailId }>Email: </label>
        <input id={ emailId } type="text"/>
      </p>
      <p>
        <label htmlFor={ passId }>Password: </label>
        <input id={ passId } type="password"/>
      </p>
      <button>Submit</button>
    </form>
  )
}

export default function App() {
  return (
    <>
      <h2>React v18 <strong>useId()</strong> Hook</h2>
      <p>
        <a href="https://reactjs.org/docs/hooks-reference.html#useid" target="_blank" rel="noreferrer">Docs</a>
      </p>

      {/* MyForm produces duplicate IDs: email + password */}
      <MyForm title="Register" />
      <MyForm title="Login" />

      <hr />
      {/* SafeMyForm produces unique IDs: :r0, :r1, etc. */}
      <SafeMyForm title="Register" />
      <SafeMyForm title="Login" />
    </>
  );
}
