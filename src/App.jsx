import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'

import Chart from './Component/Chart'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Deshboard from './Component/Deshboard'
import Widgets from './Component/Widgets'
import Ecommerce from './Component/Ecommerce'


function App() {
  

  return (
    <>
     <div className=" flex ">
     <BrowserRouter>
     <div className=' basis-[15%] h-[100vh] '>
      <Sidebar />
     </div>
     <div className=' basis-[85%] border'>
      <Header />
      <div className='container'>
      <Routes>
              <Route path="/" element={<Deshboard/>} />
              <Route path="/dashboard/ecommerce" element={<Ecommerce/>} />
              <Route path="/widgets" element={<Widgets/>} />
              <Route path="/widgets/chart" element={<Chart/>} />

              
            </Routes>
      </div>
     </div>
    
     </BrowserRouter>
     </div>

    </>
  )
}

export default App
