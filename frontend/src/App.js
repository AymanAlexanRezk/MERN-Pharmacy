import { Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Ayman Pharmacy</Link>
        <p>Your Choice For Health & Beauty</p>
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
      <footer> ©2022 Copyright Ayman Pharmacy | Hurghada</footer>
    </div>
  );
}

export default App;
