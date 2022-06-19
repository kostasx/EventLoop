import { useEffect, useState } from "react";

function Header() {
  return (
    <header>
      <h1>Project•x</h1>
      <p>Total: $ 0 | Items: 0</p>
    </header>
  );
}

function Product({ product }){
  return (
    <article key={product.id}>
    <p>
      <strong>{product.title}</strong>
    </p>
    <p>{product.price}</p>
    <button>Add to Cart</button>
    <button> ❤️ Like</button>
  </article>

  )
}

function Products({ products }) {
  return products.map((product) => {
    return <Product key={product.id} product={product} />
  });
}

function Footer() {
  return (
    <footer>
      <p>Liked: 0</p>
    </footer>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(console.log);
  }, []);
  return (
    <>
      <Header />
      <Products products={products} />
      <Footer />
    </>
  );
}
