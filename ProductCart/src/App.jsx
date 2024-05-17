import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home'
import Cart from "./component/Cart"
import { CartProvider } from 'react-use-cart';
const App = () => {
  return (
    <>
    <CartProvider>
      <Home/>
      <Cart/>
      </CartProvider>
    </>
  )
}

export default App;
