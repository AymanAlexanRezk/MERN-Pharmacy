import data from './data';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Ayman Pharmacy</a>
        <p>Your Choice For Health & Beauty</p>
      </header>

      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product">
              <img src={product.imgUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>{product.price} £E</strong>
              </p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      </main>

      <footer>Copyright ©2022 Ayman Pharmacy | Hurghada</footer>
    </div>
  );
}

export default App;
