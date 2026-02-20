
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Components/Counter'
import Fetchapi from './Components/Fetchapi'
import Home from '../Home'
import Asyncawait from './Components/Asyncawait'
import React, { Suspense, useState } from 'react'
import Apicrud from './Components/Apicrud'

const Lazyloading = React.lazy(() => import('./Components/Lazyloading'))
const Loadcard = React.lazy(() => import('./Components/Loadcard'))

function App() {

  const Load = () => {
    const [show, setShow] = useState(false)
    return (
      <div className='text-center'>
        <h1>Learn Lazy Loading</h1>
        <button onClick={() => setShow(true)}>
          Load Content
        </button>
        {show && <Suspense fallback={<h2>Loading...</h2>}>
          <Loadcard />
        </Suspense>}
      </div>
    )
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='counter' element={<Counter />}></Route>
            <Route path='fetchapi' element={<Fetchapi />}></Route>
            <Route path='asyncawait' element={<Asyncawait />}></Route>
            <React path='apicrud' element={<Apicrud />}></React>
            <Route path='card' element={<Load />}></Route>
            <Route path='load' element={<Suspense fallback={<h1 className='text-center text-[1.3rem]'>Loading...</h1>}>
              <div className='text-center text-[1.5rem]'>
                <h1 className='font-bold'>Learn Loading</h1>
                <Lazyloading />
              </div>
            </Suspense>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
