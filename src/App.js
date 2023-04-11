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
import Footer from './Components/Footer';
import Error from './Components/Error';



function App() {
  return (
  <div className='bg-gray-100'>
         <Provider store={store}>
      <Router >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
          <Route exact path='/product/:id' element={<DetailPage />}></Route>
          <Route exact path='*' element={<Error />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  </div>
  );
}

export default App;
