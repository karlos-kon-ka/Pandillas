import { Routes, Route, Router } from 'react-router-dom'
import Nav from './components/Nav'
import Presentacion from './components/Presentacion'
import Afiliaciones from './components/Afiliaciones'
import Imagenes from './components/Imagenes'
import './App.css'



function App() {


  return (
    <>
      <Nav />
    
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/Afiliaciones" element={<Afiliaciones />} />
        <Route path="/Imagenes" element={<Imagenes />} />
      </Routes>
   

      
    </>
  )
}

export default App
