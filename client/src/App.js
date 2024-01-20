
import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';

const App = () => {
  return (

    <>
    
      <BrowserRouter>
      
        <Routes>
          <Route path='/books' element={<Books/> } />
          <Route path='/add' element={<Add/> } />
          <Route path='/Update/:id' element={<Update/> } />


        </Routes>
      
      
      </BrowserRouter>
    
    
    </>
  )
}

export default App
