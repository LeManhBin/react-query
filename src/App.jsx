import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './Todos'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/react-query' element={<Todos/>}/>
      </Routes>
    </>
  )
}

export default App
