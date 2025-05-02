import { BrowserRouter as Router,Routes,Route, Outlet } from 'react-router-dom'


import Home from "./pages/Home"
import Products from "./pages/Products"
import Users from "./pages/Users"
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Login from './pages/Login'

const Layout = () =>{
  return(
    <div >
      <Navbar/>
      <div className='flex'>
        <div className='w-[250px] border-r-2'>
          <Menu/>
        </div >
        <div className='w-full'> 
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

function App() {



  return (
    <Router>
      <Routes>
      <Route element={<Layout/>} path='/'  >
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
      </Route> 
      <Route  element={<Login/>} path='/login'/>
      </Routes>
    </Router>
  )
}

export default App
