import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Product from "./components/Product"
import Error from './components/Error'
function App() {


  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='*' element={<Error/>}></Route>
      <Route path="products/*" element={<Products/>}>
          <Route path=':id' element={<Product/>}></Route>
            {/* <Route path='*' element={<Error/>}></Route> */}
      </Route>
      
    </Routes>
    </div>
  )
}

export default App
