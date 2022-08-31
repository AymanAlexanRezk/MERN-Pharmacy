import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data'; //// Static data from the frontend
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      // console.log('Testing...');
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {/* previous: data.products.map((product) => */}
        {products.map((product) => (
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
