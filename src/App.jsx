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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>

          <Route  path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path='income' element={<Income />}></Route>
            <Route path='reviews' element={<Review />}></Route>
          </Route>
          
          
          <Route path='about' element={<About />}></Route>
          
          <Route path='vans' element={<Vans />}></Route>
          <Route path='vans/:id' element={<Van />}></Route>

          {/* no need to add element to the parent if no shared UI */}
          {/* <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route> */}

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
