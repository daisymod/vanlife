import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Van from './pages/Van'
import './server'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/vans' element={<Vans />}></Route>
        <Route path='/vans/:id' element={<Van />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
