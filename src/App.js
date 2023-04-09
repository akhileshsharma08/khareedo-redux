import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import DetailPage from './Components/DetailPage';
import Products from './Components/Products';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
  <div>
         <Provider store={store}>
      <Router >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
          <Route e xact path='/product/:id' element={<DetailPage />}></Route>
        </Routes>
      </Router>
    </Provider>
  </div>
  );
}

export default App;
