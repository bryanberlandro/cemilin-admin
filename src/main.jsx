import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotesPage from './pages/notes.jsx'
import Navbar from './components/fragments/Navbar.jsx'
import { Sidebar } from './components/fragments/Sidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
    <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/notes"} element={<NotesPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
