import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import CadastrarCarro from '../pages/CadastrarCarro'
import Dashboard from '../pages/Dashboard'
import EditarCarro from '../pages/EditarCarro'
import ListarCarro from '../pages/ListarCarro'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<ListarCarro />} />
        <Route path="/novo" element={<CadastrarCarro />} />
        <Route path="/edit/:id" element={<EditarCarro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
