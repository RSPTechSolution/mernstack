import './App.css';
import Headers from './components/Header/Headers';
import Home from './pages/Home/Home';
import Edit from './pages/Edit/Edit';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import { Routes, Route } from "react-router-dom";


import React from 'react'

const App = () => {
  return (
    <>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
    
  )
}

export default App;
