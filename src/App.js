import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Chat from './components/Chat';
import About from './components/About'
import NotFound from './components/NotFound';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={<Chat />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
