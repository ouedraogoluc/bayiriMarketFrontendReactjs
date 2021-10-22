import React from 'react'

import {BrowserRouter,Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import HeaderScreen from './screens/HeaderScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
       <HeaderScreen/>
      <main>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" component={HomeScreen} exact/>
      </main>
      <footer className="row center">
        All right re
      </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
