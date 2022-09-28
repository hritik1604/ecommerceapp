import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Router, Routes, Switch } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
