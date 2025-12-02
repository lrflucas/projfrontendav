import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import CadastrarCarro from '../pages/CadastrarCarro'
import Dashboard from '../pages/Dashboard'
import EditarCarro from '../pages/EditarCarro'
import ListarCarro from '../pages/ListarCarro'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<ListarCarro />} />
        <Route path="/novo" element={<CadastrarCarro />} />
        <Route path="/edit/:id" element={<EditarCarro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App
