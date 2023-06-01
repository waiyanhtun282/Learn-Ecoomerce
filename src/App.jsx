import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products';
import { Routes ,Route } from 'react-router-dom';
import AddToCarts from './components/AddToCarts';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path={'/'} element={<Products />}/>
        <Route path={'/addtocart'} element={<AddToCarts />} />
      </Routes>
      
    </div>
  )
}

export default App
