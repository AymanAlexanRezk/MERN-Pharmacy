import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function Home() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/product/${product.slug}`}>
              <img src={product.imgUrl} alt={product.name} />
            </Link>
            <Link to={`/product/${product.slug}`}>
              <h3>{product.name}</h3>
            </Link>
            <p>{product.description}</p>
            <p>
              <strong>{product.price} £E</strong>
            </p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;