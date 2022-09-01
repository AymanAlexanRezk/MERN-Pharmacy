import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialState = { products: [], loading: true, error: '' };

function Home() {
  // const [products, setProducts] = useState([]); //// Remove its import
  const [{ loading, error, products }, dispatch] = useReducer(
    logger(reducer),
    initialState
  );

  const fetchData = async () => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const response = await axios.get('/api/products');
      dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_FAIL', payload: error.message });
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
        {loading ? (
          <div>Loading Products..</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
