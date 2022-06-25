import { Outlet, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
console.clear();

function BasicLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about-us">About</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  )
}

function AdminLayout() {
  return <Outlet />
}

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<p>Homepage</p>}/>
          <Route path="about-us" element={<p>About</p>} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<p>Admin</p>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;