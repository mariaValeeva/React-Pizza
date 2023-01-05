import React from 'react';
import './scss/app.scss';
import Header from './components/Header';

import {
  Route,
  Routes
} from "react-router-dom";


import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';



function App() {


  const [searchValue, setSearchValue] = React.useState('');

  

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
           <Route path="/" element={<Home searchValue={searchValue} />} />
           <Route path="/*" element={<NotFound />} />
           <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
    </div>
  );
}
export default App;
