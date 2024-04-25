import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NotesPage from './pages/notes.jsx'
import Navbar from './components/fragments/Navbar.jsx'
import { Sidebar } from './components/fragments/Sidebar.jsx'
import SalesPage from './pages/sales.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Navbar/>
      <Sidebar/>
    <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/consume"} element={<NotesPage/>}/>
      <Route path={"/sales"} element={<SalesPage/>}/>
    </Routes>
    </HashRouter>
  </React.StrictMode>,
)
