import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
     <Navbar></Navbar>
     <Footer></Footer>
     <Products></Products>
     </div>
    </>
  )
}

export default App
