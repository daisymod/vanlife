import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import Van from './pages/vans/Van'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Review from './pages/host/Reviews'

import './server'
import './App.css'
import HostLayout from './components/HostLayout'

function App() {

  /**
   * nesting routes inside route element which do not have a path 
   * so it will try to match to the url and renders layout component then
   * after matching, in vans page it will render vans element via <Outlet/>
   * similar to how children of a component should be rendered
   */
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>

          <Route  path='host' element={<HostLayout />}>
            <Route path='host' element={<Dashboard />}></Route>
            <Route path='income' element={<Income />}></Route>
            <Route path='reviews' element={<Review />}></Route>
          </Route>
          
          
          <Route path='about' element={<About />}></Route>
          
          <Route path='vans' element={<Vans />}></Route>
          <Route path='vans/:id' element={<Van />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
