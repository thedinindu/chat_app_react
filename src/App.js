import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Chat from './components/Chat';
import About from './components/About'
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={<Chat />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
