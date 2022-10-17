import { Provider } from 'react-redux'
import store from './redux/store'
import ProductList from './features/ProductList';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Cart from './components/Cart';
import Dessert from './components/Dessert';
import Pasta from './components/Pasta';
import Pizza from './components/Pizza';
import Drinks from './components/Drink';
import Sauces from './components/Sauces';
import Sides from './components/Sides';
import Salads from './components/Salads';

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/Pizza" element={<Pizza />} />
            <Route path="/Products/Dessert" element={<  Dessert />} />
            <Route path="/Products/Drinks" element={<   Drinks />} />
            <Route path="/Products/Pasta" element={<Pasta />} />
            <Route path="/Products/Salads" element={<Salads />} />
            <Route path="/Products/Sides" element={<Sides />} />
            <Route path="/Products/Sauces" element={<Sauces />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;