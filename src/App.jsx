import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/vans/Vans'
import Van from './pages/vans/Van'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Review from './pages/host/Reviews'
import HostVans from './pages/host/Vans'
import HostVan from './pages/host/Van'
import HostVanInfo from './pages/host/VanInfo'
import HostVanPricing from './pages/host/VanPricing'
import HostVanPhotos from './pages/host/VanPhotos'

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
            <Route path='vans' element={<HostVans />}></Route>
            <Route path='vans/:id' element={<HostVan />}>
              <Route index element={<HostVanInfo />}></Route>
              <Route path='pricing' element={<HostVanPricing />}></Route>
              <Route path='photos' element={<HostVanPhotos />}></Route>
            </Route>

            {/* <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVan />} />
            </Route> */}

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
