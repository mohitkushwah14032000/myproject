// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter'
import Fetchapi from './Components/Fetchapi'
import Home from '../Home'
import Asyncawait from './Components/Asyncawait'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='counter' element={<Counter />}></Route>
            <Route path='fetchapi' element={<Fetchapi />}></Route>
            <Route path='asyncawait'element={<Asyncawait/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
